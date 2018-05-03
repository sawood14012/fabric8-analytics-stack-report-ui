#!/bin/bash -ex

load_jenkins_vars() {
    if [ -e "jenkins-env" ]; then
        cat jenkins-env \
          | grep -E "(DEVSHIFT_TAG_LEN|DEVSHIFT_USERNAME|DEVSHIFT_PASSWORD|JENKINS_URL|GIT_BRANCH|GIT_COMMIT|BUILD_NUMBER|ghprbSourceBranch|ghprbActualCommit|BUILD_URL|ghprbPullId|RECOMMENDER_API_TOKEN)=" \
          | sed 's/^/export /g' \
          > ~/.jenkins-env
        source ~/.jenkins-env
    fi
}

prep() {
    yum -y update
    yum -y install docker make git gcc-c++ bzip2 fontconfig
    curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
    yum -y install nodejs
    yum -y install java-1.8.0-openjdk
    systemctl start docker
}

install_dependencies() {
    # Build fabric8-analytics-stack-reports-ui
    npm install;
    chmod +x /root/payload/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs

    if [ $? -eq 0 ]; then
        echo 'CICO: npm install : OK'
    else
        echo 'CICO: npm install : FAIL'
        exit 1
    fi
}

run_unit_tests() {
    # Exec unit tests
    npm run test:unit

    if [ $? -eq 0 ]; then
        echo 'CICO: unit tests OK'
    else
        echo 'CICO: unit tests FAIL'
        exit 2
    fi
}

build_project() {
    npm run build:prod
}

run_ui_integration_tests() {
    # Build ui test docker image
    echo 'recommender-token'
    echo ${RECOMMENDER_API_TOKEN}
    docker build --no-cache --rm -f Dockerfile.tests -t $(make get-test-image-name) .

    if [ $? -eq 0 ]; then
        echo 'CICO: test image build OK'
    else
        echo 'CICO: test image build FAIL'
        exit 3
    fi

    # Run ui test docker image
    docker run -e RECOMMENDER_API_TOKEN=${RECOMMENDER_API_TOKEN} $(make get-test-image-name)
    # ./tests/run_functional_tests_docker.sh

    if [ $? -eq 0 ]; then
        echo 'CICO: UI integration tests OK'
    else
        echo 'CICO: UI integration tests FAIL'
        exit 4
    fi
}

build_image() {
    local push_registry
    push_registry=$(make get-push-registry)
    # login before build to be able to pull RHEL parent image
    if [ -n "${DEVSHIFT_USERNAME}" -a -n "${DEVSHIFT_PASSWORD}" ]; then
        docker login -u ${DEVSHIFT_USERNAME} -p ${DEVSHIFT_PASSWORD} ${push_registry}
    else
        echo "Could not login, missing credentials for the registry"
        exit 1
    fi
    make docker-build
}

run_image() {
    make docker-run
}

tag_push() {
    local target=$1
    local source=$2
    docker tag ${source} ${target}
    docker push ${target}
}

push_image() {
    local image_name
    local image_repository
    local short_commit
    local push_registry
    image_name=$(make get-image-name)
    image_repository=$(make get-image-repository)
    short_commit=$(git rev-parse --short=7 HEAD)
    push_registry=$(make get-push-registry)

    if [ -n "${ghprbPullId}" ]; then
        # PR build
        pr_id="SNAPSHOT-PR-${ghprbPullId}"
        tag_push ${push_registry}/${image_repository}:${pr_id} ${image_name}
        tag_push ${push_registry}/${image_repository}:${pr_id}-${short_commit} ${image_name}
    else
        # master branch build
        tag_push ${push_registry}/${image_repository}:latest ${image_name}
        tag_push ${push_registry}/${image_repository}:${short_commit} ${image_name}
    fi

    echo 'CICO: Image pushed, ready to update deployed app'
}

load_jenkins_vars
prep
