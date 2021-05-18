let http = require('http');

const app = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(
    JSON.stringify({
      analyzed_dependencies: [
        {
          dependencies: [
            {
              "dependencies": null,
              "name": "python-dateutil",
              "version": "2.7.3"
          },
          {
              "dependencies": [{
                "dependencies": [{
                  "dependencies": null,
                  "name": "python-dateutil",
                  "version": "2.7.3"
              },
              {
                  "dependencies": null,
                  "name": "six",
                  "version": "1.12.0"
              }],
                "name": "python-dateutil",
                "version": "2.7.3"
            },],
              "name": "six",
              "version": "1.12.0"
          }
          ],
          ecosystem: 'npm',
          github: {
            contributors: '69',
            dependent_projects: '1151',
            dependent_repos: '56400',
            first_release_date: null,
            forks_count: '319',
            issues: {
              month: {
                closed: 14,
                opened: 4,
              },
              year: {
                closed: 52,
                opened: 31,
              },
            },
            latest_release_duration: '2018-11-13 07:10:21',
            open_issues_count: '120',
            pull_requests: {
              month: {
                closed: 8,
                opened: 5,
              },
              year: {
                closed: 30,
                opened: 27,
              },
            },
            size: 'N/A',
            stargazers_count: '1304',
            total_releases: '21',
            used_by: [
              {
                name: 'angular/angular.js',
                stars: '56805',
              },
              {
                name: 'angular/angular',
                stars: '27063',
              },
              {
                name: 'angular/material2',
                stars: '10412',
              },
              {
                name: 'cyclejs/cyclejs',
                stars: '7207',
              },
              {
                name: 'emberjs/data',
                stars: '2802',
              },
              {
                name: 'emberjs/ember.js',
                stars: '18160',
              },
              {
                name: 'ionic-team/ionic',
                stars: '30927',
              },
              {
                name: 'tmpvar/jsdom',
                stars: '8162',
              },
              {
                name: 'vuejs/vue',
                stars: '64197',
              },
              {
                name: 'zurb/foundation-sites',
                stars: '26110',
              },
            ],
            watchers: '35',
          },
          latest_version: '0.5.5',
          licenses: ['MIT'],
          name: 'adm-zip',
          private_vulnerabilities: [],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2018-1002204'],
              cvss: 9.4,
              cvss_v3:
                'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:H/A:H/E:H/RL:O/RC:C',
              cwes: ['CWE-29'],
              id: 'SNYK-JS-ADMZIP-11093',
              severity: 'critical',
              title: 'Arbitrary File Write via Archive Extraction (Zip Slip)',
              url: 'https://snyk.io/vuln/SNYK-JS-ADMZIP-11093',
            },
          ],
          recommended_version: '0.4.16',
          url: 'https://snyk.io/vuln/npm:adm-zip',
          version: '0.4.7',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [
            {
              "dependencies": null,
              "name": "python-dateutil",
              "version": "2.7.3"
          },
          {
              "dependencies": null,
              "name": "six",
              "version": "1.12.0"
          }
          ],
          ecosystem: 'npm',
          github: {
            contributors: '19',
            dependent_projects: '20748',
            dependent_repos: '862600',
            first_release_date: null,
            forks_count: '589',
            issues: {
              month: {
                closed: 2,
                opened: 4,
              },
              year: {
                closed: 29,
                opened: 30,
              },
            },
            latest_release_duration: '2019-04-26 03:31:23',
            open_issues_count: '27',
            pull_requests: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 6,
                opened: 8,
              },
            },
            size: 'N/A',
            stargazers_count: '4761',
            total_releases: '65',
            used_by: [
              {
                name: 'angular/angular.js',
                stars: '56635',
              },
              {
                name: 'angular/angular',
                stars: '26633',
              },
              {
                name: 'expressjs/express',
                stars: '33265',
              },
              {
                name: 'facebook/jest',
                stars: '11573',
              },
              {
                name: 'karma-runner/karma',
                stars: '8707',
              },
              {
                name: 'petkaantonov/bluebird',
                stars: '14921',
              },
              {
                name: 'remy/nodemon',
                stars: '11454',
              },
              {
                name: 'tmpvar/jsdom',
                stars: '8055',
              },
              {
                name: 'visionmedia/superagent',
                stars: '10702',
              },
              {
                name: 'vuejs/vue',
                stars: '62696',
              },
            ],
            watchers: '102',
          },
          latest_version: '1.19.0',
          licenses: ['MIT'],
          name: 'body-parser',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '1.19.0',
          url: 'https://snyk.io/vuln/npm:body-parser',
          version: '1.9.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [
            {
              "dependencies": null,
              "name": "python-dateutil",
              "version": "2.7.3"
          },
          {
              "dependencies": null,
              "name": "six",
              "version": "1.12.0"
          }
          ],
          ecosystem: 'npm',
          github: {
            contributors: '8',
            dependent_projects: '129',
            dependent_repos: '35214',
            first_release_date: null,
            forks_count: '21',
            issues: {
              month: {
                closed: -1,
                opened: 1,
              },
              year: {
                closed: 3,
                opened: 4,
              },
            },
            latest_release_duration: '2019-03-26 13:47:39',
            open_issues_count: '9',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: 1,
                opened: 2,
              },
            },
            size: 'N/A',
            stargazers_count: '67',
            total_releases: '10',
            used_by: [],
            watchers: '33',
          },
          latest_version: '1.2.3',
          licenses: ['Apache-2.0'],
          name: 'cfenv',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '1.2.3',
          url: 'https://snyk.io/vuln/npm:cfenv',
          version: '1.2.3',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [
            
          ],
          ecosystem: 'npm',
          github: {
            contributors: '76',
            dependent_projects: '1209',
            dependent_repos: '83819',
            first_release_date: null,
            forks_count: '365',
            issues: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 0,
                opened: 2,
              },
            },
            latest_release_duration: '2018-03-20 00:34:01',
            open_issues_count: '51',
            pull_requests: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 1,
                opened: 3,
              },
            },
            size: 'N/A',
            stargazers_count: '3278',
            total_releases: '25',
            used_by: [],
            watchers: '65',
          },
          latest_version: '0.16.0',
          licenses: ['MIT'],
          name: 'consolidate',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '0.15.1',
          url: 'https://snyk.io/vuln/npm:consolidate',
          version: '0.14.5',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '14',
            dependent_projects: '6507',
            dependent_repos: '189767',
            first_release_date: null,
            forks_count: '170',
            issues: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 7,
                opened: 8,
              },
            },
            latest_release_duration: '2020-03-15 04:07:15',
            open_issues_count: '3',
            pull_requests: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 2,
                opened: 2,
              },
            },
            size: 'N/A',
            stargazers_count: '1594',
            total_releases: '16',
            used_by: [],
            watchers: '38',
          },
          latest_version: '1.4.5',
          licenses: ['MIT'],
          name: 'cookie-parser',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '1.4.5',
          url: 'https://snyk.io/vuln/npm:cookie-parser',
          version: '1.3.3',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '15',
            dependent_projects: '143',
            dependent_repos: '1089',
            first_release_date: null,
            forks_count: '61',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2017-12-09 05:12:03',
            open_issues_count: '7',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '110',
            total_releases: '17',
            used_by: [],
            watchers: '36',
          },
          latest_version: '-1',
          licenses: ['MIT'],
          name: 'dustjs-helpers',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:dustjs-helpers',
          version: '1.5.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '35',
            dependent_projects: '367',
            dependent_repos: '6134',
            first_release_date: null,
            forks_count: '496',
            issues: {
              month: {
                closed: 1,
                opened: 1,
              },
              year: {
                closed: 2,
                opened: 5,
              },
            },
            latest_release_duration: '2016-12-09 14:00:01',
            open_issues_count: '80',
            pull_requests: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 0,
                opened: 0,
              },
            },
            size: 'N/A',
            stargazers_count: '2840',
            total_releases: '54',
            used_by: [],
            watchers: '139',
          },
          latest_version: '2.7.5',
          licenses: ['MIT'],
          name: 'dustjs-linkedin',
          private_vulnerabilities: [],
          public_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 8.6,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:L/A:L',
              cwes: ['CWE-95'],
              id: 'SNYK-JS-DUSTJSLINKEDIN-10136',
              severity: 'high',
              title: 'Code Injection',
              url: 'https://snyk.io/vuln/SNYK-JS-DUSTJSLINKEDIN-10136',
            },
          ],
          recommended_version: '2.7.5',
          url: 'https://snyk.io/vuln/npm:dustjs-linkedin',
          version: '2.5.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '2',
            dependent_projects: '83',
            dependent_repos: '1887',
            first_release_date: null,
            forks_count: '66',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2012-11-12 16:22:14',
            open_issues_count: '15',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '284',
            total_releases: '17',
            used_by: [],
            watchers: '15',
          },
          latest_version: '-1',
          licenses: [],
          name: 'ejs-locals',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:ejs-locals',
          version: '1.0.2',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '23',
            dependent_projects: '8931',
            dependent_repos: '248500',
            first_release_date: null,
            forks_count: '544',
            issues: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 4,
                opened: 4,
              },
            },
            latest_release_duration: '2020-05-17 07:00:34',
            open_issues_count: '104',
            pull_requests: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 0,
                opened: 1,
              },
            },
            size: 'N/A',
            stargazers_count: '4389',
            total_releases: '68',
            used_by: [
              {
                name: 'balderdashy/sails',
                stars: '17627',
              },
              {
                name: 'caolan/nodeunit',
                stars: '1887',
              },
              {
                name: 'eslint/eslint',
                stars: '8393',
              },
              {
                name: 'expressjs/express',
                stars: '33422',
              },
              {
                name: 'postcss/autoprefixer',
                stars: '13254',
              },
              {
                name: 'postcss/postcss',
                stars: '15744',
              },
              {
                name: 'remy/nodemon',
                stars: '11528',
              },
              {
                name: 'strongloop/loopback',
                stars: '9616',
              },
              {
                name: 'twbs/bootstrap-sass',
                stars: '12213',
              },
              {
                name: 'vuejs/vue',
                stars: '64206',
              },
            ],
            watchers: '143',
          },
          latest_version: '3.1.6',
          licenses: [],
          name: 'ejs',
          private_vulnerabilities: [],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2017-1000228'],
              cvss: 8.1,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H',
              cwes: ['CWE-94'],
              id: 'SNYK-JS-EJS-10218',
              severity: 'high',
              title: 'Arbitrary Code Execution',
              url: 'https://snyk.io/vuln/SNYK-JS-EJS-10218',
            },
            {
              cve_ids: ['CVE-2017-1000189'],
              cvss: 5.9,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-EJS-10226',
              severity: 'medium',
              title: 'Denial of Service (DoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-EJS-10226',
            },
            {
              cve_ids: ['CVE-2017-1000188'],
              cvss: 5.9,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-EJS-10225',
              severity: 'medium',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-EJS-10225',
            },
          ],
          recommended_version: '3.1.3',
          url: 'https://snyk.io/vuln/npm:ejs',
          version: '1.0.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '6',
            dependent_projects: '906',
            dependent_repos: '45297',
            first_release_date: null,
            forks_count: '46',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2019-05-09 03:35:09',
            open_issues_count: '0',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '317',
            total_releases: '23',
            used_by: [],
            watchers: '15',
          },
          latest_version: '1.5.1',
          licenses: ['MIT'],
          name: 'errorhandler',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:errorhandler',
          version: '1.2.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '19',
            dependent_projects: '179',
            dependent_repos: '1846',
            first_release_date: null,
            forks_count: '86',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2019-04-02 07:32:07',
            open_issues_count: '1',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '522',
            total_releases: '25',
            used_by: [],
            watchers: '19',
          },
          latest_version: '1.2.0',
          licenses: ['MIT'],
          name: 'express-fileupload',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 9.8,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-EXPRESSFILEUPLOAD-473997',
              severity: 'critical',
              title: 'Denial of Service (DoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-EXPRESSFILEUPLOAD-473997',
            },
          ],
          public_vulnerabilities: [],
          recommended_version: '1.1.7-alpha.4',
          url: 'https://snyk.io/vuln/npm:express-fileupload',
          version: '0.0.5',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '239',
            dependent_projects: '48988',
            dependent_repos: '893994',
            first_release_date: null,
            forks_count: '8826',
            issues: {
              month: {
                closed: 14,
                opened: 13,
              },
              year: {
                closed: 250,
                opened: 243,
              },
            },
            latest_release_duration: '2018-10-27 03:12:11',
            open_issues_count: '166',
            pull_requests: {
              month: {
                closed: 0,
                opened: 3,
              },
              year: {
                closed: 71,
                opened: 60,
              },
            },
            size: 'N/A',
            stargazers_count: '52517',
            total_releases: '291',
            used_by: [
              {
                name: 'Automattic/mongoose',
                stars: '14372',
              },
              {
                name: 'ReactTraining/react-router',
                stars: '27232',
              },
              {
                name: 'angular/angular.js',
                stars: '57749',
              },
              {
                name: 'angular/angular',
                stars: '31547',
              },
              {
                name: 'facebook/jest',
                stars: '14465',
              },
              {
                name: 'facebook/react',
                stars: '84669',
              },
              {
                name: 'postcss/autoprefixer',
                stars: '14331',
              },
              {
                name: 'reactjs/redux',
                stars: '36922',
              },
              {
                name: 'socketio/socket.io',
                stars: '38209',
              },
              {
                name: 'webpack/webpack',
                stars: '35429',
              },
            ],
            watchers: '1794',
          },
          latest_version: '4.17.1',
          licenses: ['MIT'],
          name: 'express',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '4.17.1',
          url: 'https://snyk.io/vuln/npm:express',
          version: '4.12.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '79',
            dependent_projects: '640',
            dependent_repos: '45786',
            first_release_date: null,
            forks_count: '225',
            issues: {
              month: {
                closed: 2,
                opened: 5,
              },
              year: {
                closed: 61,
                opened: 70,
              },
            },
            latest_release_duration: '2019-07-26 11:30:25',
            open_issues_count: '19',
            pull_requests: {
              month: {
                closed: 1,
                opened: 1,
              },
              year: {
                closed: 30,
                opened: 32,
              },
            },
            size: 'N/A',
            stargazers_count: '1977',
            total_releases: '81',
            used_by: [],
            watchers: '25',
          },
          latest_version: '16.3.0',
          licenses: ['MIT'],
          name: 'file-type',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '12.1.0',
          url: 'https://snyk.io/vuln/npm:file-type',
          version: '8.1.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '4',
            dependent_projects: '44',
            dependent_repos: '4079',
            first_release_date: null,
            forks_count: '1',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2017-05-19 04:31:29',
            open_issues_count: '0',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '23',
            total_releases: '5',
            used_by: [],
            watchers: '11',
          },
          latest_version: '-1',
          licenses: ['MIT'],
          name: 'humanize-ms',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:humanize-ms',
          version: '1.0.1',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '282',
            dependent_projects: '23050',
            dependent_repos: '276599',
            first_release_date: null,
            forks_count: '19847',
            issues: {
              month: {
                closed: 8,
                opened: 12,
              },
              year: {
                closed: 134,
                opened: 126,
              },
            },
            latest_release_duration: '2020-05-04 22:50:08',
            open_issues_count: '76',
            pull_requests: {
              month: {
                closed: 1,
                opened: 4,
              },
              year: {
                closed: 84,
                opened: 81,
              },
            },
            size: 'N/A',
            stargazers_count: '54685',
            total_releases: '53',
            used_by: [
              {
                name: 'angular/angular.js',
                stars: '56788',
              },
              {
                name: 'benmosher/eslint-plugin-import',
                stars: '854',
              },
              {
                name: 'cheeriojs/cheerio',
                stars: '12872',
              },
              {
                name: 'emberjs/data',
                stars: '2801',
              },
              {
                name: 'emberjs/ember.js',
                stars: '18157',
              },
              {
                name: 'facebook/jest',
                stars: '11694',
              },
              {
                name: 'laravel/laravel',
                stars: '33915',
              },
              {
                name: 'twbs/bootstrap',
                stars: '114217',
              },
              {
                name: 'webpack/webpack-dev-server',
                stars: '2285',
              },
              {
                name: 'zurb/foundation-sites',
                stars: '26103',
              },
            ],
            watchers: '3341',
          },
          latest_version: '3.6.0',
          licenses: ['MIT'],
          name: 'jquery',
          private_vulnerabilities: [],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2015-9251', 'CVE-2017-16012'],
              cvss: 5.4,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-JQUERY-10186',
              severity: 'medium',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-JQUERY-10186',
            },
            {
              cve_ids: ['CVE-2020-11022'],
              cvss: 6.5,
              cvss_v3:
                'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N/E:U/RL:O/RC:R',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-JQUERY-567880',
              severity: 'medium',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-JQUERY-567880',
            },
            {
              cve_ids: ['CVE-2020-11023'],
              cvss: 6.3,
              cvss_v3:
                'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:L/E:U/RL:O/RC:C',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-JQUERY-565129',
              severity: 'medium',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-JQUERY-565129',
            },
            {
              cve_ids: ['CVE-2019-11358', 'CVE-2019-5428'],
              cvss: 5.6,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-JQUERY-174006',
              severity: 'medium',
              title: 'Prototype Pollution',
              url: 'https://snyk.io/vuln/SNYK-JS-JQUERY-174006',
            },
          ],
          recommended_version: '3.5.1',
          url: 'https://snyk.io/vuln/npm:jquery',
          version: '2.2.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '288',
            dependent_projects: '83379',
            dependent_repos: '634301',
            first_release_date: null,
            forks_count: '5635',
            issues: {
              month: {
                closed: 5,
                opened: 21,
              },
              year: {
                closed: 213,
                opened: 280,
              },
            },
            latest_release_duration: '2018-09-12 18:32:16',
            open_issues_count: '201',
            pull_requests: {
              month: {
                closed: 1,
                opened: 4,
              },
              year: {
                closed: 69,
                opened: 120,
              },
            },
            size: 'N/A',
            stargazers_count: '48810',
            total_releases: '104',
            used_by: [],
            watchers: '879',
          },
          latest_version: '4.17.21',
          licenses: ['MIT'],
          name: 'lodash',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 6.3,
              cvss_v3:
                'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:L/E:P/RL:U/RC:C',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-LODASH-567746',
              severity: 'medium',
              title: 'Prototype Pollution',
              url: 'https://snyk.io/vuln/SNYK-JS-LODASH-567746',
            },
          ],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2018-3721'],
              cvss: 6.3,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-LODASH-174180',
              severity: 'medium',
              title: 'Prototype Pollution',
              url: 'https://snyk.io/vuln/SNYK-JS-LODASH-174180',
            },
            {
              cve_ids: ['CVE-2019-10744'],
              cvss: 7.3,
              cvss_v3:
                'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L/E:P/RL:O/RC:C',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-LODASH-450202',
              severity: 'high',
              title: 'Prototype Pollution',
              url: 'https://snyk.io/vuln/SNYK-JS-LODASH-450202',
            },
            {
              cve_ids: ['CVE-2019-1010266'],
              cvss: 4.4,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:H/UI:N/S:U/C:N/I:N/A:H',
              cwes: ['CWE-185'],
              id: 'SNYK-JS-LODASH-73639',
              severity: 'medium',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-LODASH-73639',
            },
            {
              cve_ids: ['CVE-2018-16487'],
              cvss: 7.3,
              cvss_v3: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-LODASH-73638',
              severity: 'high',
              title: 'Prototype Pollution',
              url: 'https://snyk.io/vuln/SNYK-JS-LODASH-73638',
            },
          ],
          recommended_version: '4.17.20',
          url: 'https://snyk.io/vuln/npm:lodash',
          version: '4.17.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '119',
            dependent_projects: '6490',
            dependent_repos: '73184',
            first_release_date: null,
            forks_count: '2997',
            issues: {
              month: {
                closed: 6,
                opened: 11,
              },
              year: {
                closed: 167,
                opened: 144,
              },
            },
            latest_release_duration: '2019-06-30 02:11:53',
            open_issues_count: '54',
            pull_requests: {
              month: {
                closed: 28,
                opened: 28,
              },
              year: {
                closed: 204,
                opened: 208,
              },
            },
            size: 'N/A',
            stargazers_count: '24694',
            total_releases: '57',
            used_by: [],
            watchers: '404',
          },
          latest_version: '2.0.1',
          licenses: [],
          name: 'marked',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 7.5,
              cvss_v3:
                'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H/E:P/RL:O/RC:C',
              cwes: ['CWE-185', 'CWE-400'],
              id: 'SNYK-JS-MARKED-10990',
              severity: 'high',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10990',
            },
            {
              cve_ids: [],
              cvss: 5.3,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MARKED-174116',
              severity: 'medium',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-174116',
            },
          ],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2017-1000427'],
              cvss: 7.5,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-MARKED-10377',
              severity: 'high',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10377',
            },
            {
              cve_ids: [],
              cvss: 5.3,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MARKED-451540',
              severity: 'medium',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-451540',
            },
            {
              cve_ids: ['CVE-2017-16114'],
              cvss: 7.5,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MARKED-10782',
              severity: 'high',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10782',
            },
            {
              cve_ids: [],
              cvss: 7.5,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-MARKED-10849',
              severity: 'high',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10849',
            },
            {
              cve_ids: [],
              cvss: 4.8,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-MARKED-10850',
              severity: 'medium',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10850',
            },
            {
              cve_ids: ['CVE-2016-10531'],
              cvss: 8.8,
              cvss_v3: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H',
              cwes: ['CWE-79'],
              id: 'SNYK-JS-MARKED-10099',
              severity: 'high',
              title: 'Cross-site Scripting (XSS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MARKED-10099',
            },
          ],
          recommended_version: '1.1.0',
          url: 'https://snyk.io/vuln/npm:marked',
          version: '0.3.5',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '4',
            dependent_projects: '1099',
            dependent_repos: '53427',
            first_release_date: null,
            forks_count: '42',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2018-07-12 03:11:32',
            open_issues_count: '0',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '429',
            total_releases: '23',
            used_by: [],
            watchers: '18',
          },
          latest_version: '3.0.0',
          licenses: ['MIT'],
          name: 'method-override',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '3.0.0',
          url: 'https://snyk.io/vuln/npm:method-override',
          version: '3.0.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '414',
            dependent_projects: '38749',
            dependent_repos: '238544',
            first_release_date: null,
            forks_count: '6875',
            issues: {
              month: {
                closed: 2,
                opened: 18,
              },
              year: {
                closed: 548,
                opened: 271,
              },
            },
            latest_release_duration: '2020-06-18 22:00:56',
            open_issues_count: '127',
            pull_requests: {
              month: {
                closed: 2,
                opened: 4,
              },
              year: {
                closed: 273,
                opened: 153,
              },
            },
            size: 'N/A',
            stargazers_count: '45515',
            total_releases: '71',
            used_by: [
              {
                name: 'DefinitelyTyped/DefinitelyTyped',
                stars: '12868',
              },
              {
                name: 'ReactTraining/react-router',
                stars: '25916',
              },
              {
                name: 'SBoudrias/Inquirer.js',
                stars: '5149',
              },
              {
                name: 'angular/angular.js',
                stars: '57223',
              },
              {
                name: 'angular/angular',
                stars: '29571',
              },
              {
                name: 'angular/zone.js',
                stars: '2334',
              },
              {
                name: 'babel/babel',
                stars: '23356',
              },
              {
                name: 'facebook/jest',
                stars: '13148',
              },
              {
                name: 'facebook/react',
                stars: '80053',
              },
              {
                name: 'webpack/webpack',
                stars: '33424',
              },
            ],
            watchers: '915',
          },
          latest_version: '2.29.1',
          licenses: ['MIT'],
          name: 'moment',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 5.9,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MOMENT-10164',
              severity: 'medium',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MOMENT-10164',
            },
          ],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2017-18214'],
              cvss: 3.7,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MOMENT-10841',
              severity: 'low',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MOMENT-10841',
            },
          ],
          recommended_version: '2.27.0',
          url: 'https://snyk.io/vuln/npm:moment',
          version: '2.15.1',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '326',
            dependent_projects: '7569',
            dependent_repos: '116995',
            first_release_date: null,
            forks_count: '1626',
            issues: {
              month: {
                closed: 0,
                opened: 0,
              },
              year: {
                closed: 0,
                opened: 0,
              },
            },
            latest_release_duration: '2020-06-12 13:41:14',
            open_issues_count: '16',
            pull_requests: {
              month: {
                closed: 25,
                opened: 28,
              },
              year: {
                closed: 509,
                opened: 497,
              },
            },
            size: 'N/A',
            stargazers_count: '8933',
            total_releases: '357',
            used_by: [
              {
                name: 'Automattic/mongoose',
                stars: '14185',
              },
              {
                name: 'Automattic/monk',
                stars: '1318',
              },
              {
                name: 'agenda/agenda',
                stars: '3295',
              },
              {
                name: 'dresende/node-orm2',
                stars: '2715',
              },
              {
                name: 'gatsbyjs/gatsby',
                stars: '15707',
              },
              {
                name: 'jdesboeufs/connect-mongo',
                stars: '1344',
              },
              {
                name: 'keystonejs/keystone',
                stars: '11516',
              },
              {
                name: 'mafintosh/mongojs',
                stars: '1536',
              },
              {
                name: 'parse-community/parse-server',
                stars: '14402',
              },
              {
                name: 'typeorm/typeorm',
                stars: '4037',
              },
            ],
            watchers: '278',
          },
          latest_version: '3.6.5',
          licenses: [],
          name: 'mongodb',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '3.5.9',
          url: 'https://snyk.io/vuln/npm:mongodb',
          version: '3.6.5',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '403',
            dependent_projects: '8835',
            dependent_repos: '181203',
            first_release_date: null,
            forks_count: '3039',
            issues: {
              month: {
                closed: 82,
                opened: 82,
              },
              year: {
                closed: 1027,
                opened: 1036,
              },
            },
            latest_release_duration: '2020-06-15 15:25:29',
            open_issues_count: '332',
            pull_requests: {
              month: {
                closed: 17,
                opened: 16,
              },
              year: {
                closed: 269,
                opened: 273,
              },
            },
            size: 'N/A',
            stargazers_count: '22440',
            total_releases: '606',
            used_by: [
              {
                name: 'SeyZ/jsonapi-serializer',
                stars: '344',
              },
              {
                name: 'chevex-archived/mongoose-auto-increment',
                stars: '248',
              },
              {
                name: 'jdesboeufs/connect-mongo',
                stars: '1321',
              },
              {
                name: 'keymetrics/pmx',
                stars: '195',
              },
              {
                name: 'keystonejs/keystone',
                stars: '11209',
              },
              {
                name: 'leepowellcouk/mongoose-validator',
                stars: '317',
              },
              {
                name: 'peerigon/updtr',
                stars: '1855',
              },
              {
                name: 'saintedlama/passport-local-mongoose',
                stars: '649',
              },
              {
                name: 'snyk/snyk',
                stars: '626',
              },
              {
                name: 'strapi/strapi',
                stars: '1780',
              },
            ],
            watchers: '517',
          },
          latest_version: '5.12.3',
          licenses: ['MIT'],
          name: 'mongoose',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 5.1,
              cvss_v3:
                'CVSS:3.0/AV:L/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N/E:F/RL:O/RC:C',
              cwes: ['CWE-201'],
              id: 'SNYK-JS-MONGOOSE-10081',
              severity: 'medium',
              title: 'Remote Memory Exposure',
              url: 'https://snyk.io/vuln/SNYK-JS-MONGOOSE-10081',
            },
          ],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2019-17426'],
              cvss: 5.9,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N',
              cwes: ['CWE-200'],
              id: 'SNYK-JS-MONGOOSE-472486',
              severity: 'medium',
              title: 'Information Exposure',
              url: 'https://snyk.io/vuln/SNYK-JS-MONGOOSE-472486',
            },
          ],
          recommended_version: '5.9.19',
          url: 'https://snyk.io/vuln/npm:mongoose',
          version: '4.2.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '20',
            dependent_projects: '4900',
            dependent_repos: '174516',
            first_release_date: null,
            forks_count: '462',
            issues: {
              month: {
                closed: 1,
                opened: 1,
              },
              year: {
                closed: 9,
                opened: 10,
              },
            },
            latest_release_duration: '2018-09-11 01:12:35',
            open_issues_count: '17',
            pull_requests: {
              month: {
                closed: 4,
                opened: 0,
              },
              year: {
                closed: 12,
                opened: 13,
              },
            },
            size: 'N/A',
            stargazers_count: '6367',
            total_releases: '25',
            used_by: [
              {
                name: 'angular/angular.js',
                stars: '56681',
              },
              {
                name: 'angular/angular',
                stars: '26857',
              },
              {
                name: 'angular/material2',
                stars: '10296',
              },
              {
                name: 'ember-cli/ember-cli',
                stars: '3130',
              },
              {
                name: 'emberjs/data',
                stars: '2799',
              },
              {
                name: 'emberjs/ember.js',
                stars: '18145',
              },
              {
                name: 'expressjs/express',
                stars: '33321',
              },
              {
                name: 'facebook/jest',
                stars: '11643',
              },
              {
                name: 'remy/nodemon',
                stars: '11489',
              },
              {
                name: 'stefanpenner/es6-promise',
                stars: '4735',
              },
            ],
            watchers: '91',
          },
          latest_version: '1.10.0',
          licenses: [],
          name: 'morgan',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '1.10.0',
          url: 'https://snyk.io/vuln/npm:morgan',
          version: '1.10.0',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '30',
            dependent_projects: '1290',
            dependent_repos: '411077',
            first_release_date: null,
            forks_count: '202',
            issues: {
              month: {
                closed: 3,
                opened: 0,
              },
              year: {
                closed: 18,
                opened: 15,
              },
            },
            latest_release_duration: '2017-11-30 18:30:16',
            open_issues_count: '14',
            pull_requests: {
              month: {
                closed: 2,
                opened: 1,
              },
              year: {
                closed: 9,
                opened: 9,
              },
            },
            size: 'N/A',
            stargazers_count: '3400',
            total_releases: '17',
            used_by: [
              {
                name: 'angular/angular.js',
                stars: '57588',
              },
              {
                name: 'angular/angular',
                stars: '30440',
              },
              {
                name: 'facebook/jest',
                stars: '13658',
              },
              {
                name: 'facebook/react',
                stars: '82053',
              },
              {
                name: 'rails/rails',
                stars: '37750',
              },
              {
                name: 'reactjs/redux',
                stars: '35993',
              },
              {
                name: 'sinonjs/sinon',
                stars: '5049',
              },
              {
                name: 'twbs/bootstrap',
                stars: '118475',
              },
              {
                name: 'vuejs/vue',
                stars: '74973',
              },
              {
                name: 'webpack/webpack',
                stars: '34251',
              },
            ],
            watchers: '42',
          },
          latest_version: '2.1.3',
          licenses: ['MIT'],
          name: 'ms',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 3.7,
              cvss_v3: 'CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L',
              cwes: ['CWE-400'],
              id: 'SNYK-JS-MS-10509',
              severity: 'low',
              title: 'Regular Expression Denial of Service (ReDoS)',
              url: 'https://snyk.io/vuln/SNYK-JS-MS-10509',
            },
          ],
          public_vulnerabilities: [],
          recommended_version: '2.1.2',
          url: 'https://snyk.io/vuln/npm:ms',
          version: '0.7.3',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '30',
            dependent_projects: '4554',
            dependent_repos: '39899',
            first_release_date: null,
            forks_count: '1924',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2019-04-18 20:47:06',
            open_issues_count: '133',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '13885',
            total_releases: '64',
            used_by: [
              {
                name: 'TryGhost/Ghost',
                stars: '24250',
              },
              {
                name: 'Vincit/objection.js',
                stars: '1540',
              },
              {
                name: 'bookshelf/bookshelf',
                stars: '4417',
              },
              {
                name: 'dresende/node-orm2',
                stars: '2661',
              },
              {
                name: 'hemerajs/hemera',
                stars: '353',
              },
              {
                name: 'newrelic/node-newrelic',
                stars: '596',
              },
              {
                name: 'node-red/node-red-nodes',
                stars: '292',
              },
              {
                name: 'sequelize/cli',
                stars: '678',
              },
              {
                name: 'tgriesser/knex',
                stars: '5482',
              },
              {
                name: 'typeorm/typeorm',
                stars: '3598',
              },
            ],
            watchers: '503',
          },
          latest_version: '2.18.1',
          licenses: [],
          name: 'mysql',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '2.18.1',
          url: 'https://snyk.io/vuln/npm:mysql',
          version: '2.18.1',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '19',
            dependent_projects: '180',
            dependent_repos: '3769',
            first_release_date: null,
            forks_count: '39',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2018-05-11 22:00:50',
            open_issues_count: '0',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '42',
            total_releases: '72',
            used_by: [],
            watchers: '21',
          },
          latest_version: '2.1.3',
          licenses: ['BSD'],
          name: 'npmconf',
          private_vulnerabilities: [
            {
              cve_ids: [],
              cvss: 7.4,
              cvss_v3:
                'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:N/A:N/E:F/RL:O/RC:C',
              cwes: ['CWE-201'],
              id: 'SNYK-JS-NPMCONF-12143',
              severity: 'high',
              title: 'Uninitialized Memory Exposure',
              url: 'https://snyk.io/vuln/SNYK-JS-NPMCONF-12143',
            },
          ],
          public_vulnerabilities: [],
          recommended_version: '2.1.3',
          url: 'https://snyk.io/vuln/npm:npmconf',
          version: '0.0.24',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '4',
            dependent_projects: '77',
            dependent_repos: '746',
            first_release_date: null,
            forks_count: '6',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2017-07-13 16:31:10',
            open_issues_count: '2',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '14',
            total_releases: '7',
            used_by: [],
            watchers: '1',
          },
          latest_version: '0.1.4',
          licenses: ['MIT'],
          name: 'optional',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:optional',
          version: '0.1.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '16',
            dependent_projects: '227',
            dependent_repos: '1322',
            first_release_date: null,
            forks_count: '39',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2017-10-13 05:08:24',
            open_issues_count: '36',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '357',
            total_releases: '40',
            used_by: [],
            watchers: '15',
          },
          latest_version: '2.0.0',
          licenses: [],
          name: 'st',
          private_vulnerabilities: [],
          public_vulnerabilities: [
            {
              cve_ids: ['CVE-2017-16224'],
              cvss: 4.3,
              cvss_v3:
                'CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C',
              cwes: ['CWE-601'],
              id: 'SNYK-JS-ST-10820',
              severity: 'medium',
              title: 'Open Redirect',
              url: 'https://snyk.io/vuln/SNYK-JS-ST-10820',
            },
            {
              cve_ids: ['CVE-2014-3744'],
              cvss: 5.3,
              cvss_v3:
                'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:P/RL:O/RC:C',
              cwes: ['CWE-22'],
              id: 'SNYK-JS-ST-10012',
              severity: 'medium',
              title: 'Directory Traversal',
              url: 'https://snyk.io/vuln/SNYK-JS-ST-10012',
            },
          ],
          recommended_version: '2.0.0',
          url: 'https://snyk.io/vuln/npm:st',
          version: '0.2.4',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '14',
            dependent_projects: '338',
            dependent_repos: '10789',
            first_release_date: null,
            forks_count: '27',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2018-05-21 09:26:58',
            open_issues_count: '4',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '161',
            total_releases: '17',
            used_by: [
              {
                name: 'admc/wd',
                stars: '1196',
              },
              {
                name: 'aksonov/react-native-router-flux',
                stars: '5152',
              },
              {
                name: 'almasaeed2010/AdminLTE',
                stars: '17835',
              },
              {
                name: 'angular/angular.js',
                stars: '56805',
              },
              {
                name: 'elastic/elasticsearch-js',
                stars: '2158',
              },
              {
                name: 'facebook/jest',
                stars: '11773',
              },
              {
                name: 'gruntjs/grunt-contrib-compress',
                stars: '348',
              },
              {
                name: 'keycloak/keycloak',
                stars: '1364',
              },
              {
                name: 'mgravell/protobuf-net',
                stars: '1494',
              },
              {
                name: 'styled-components/styled-components',
                stars: '9338',
              },
            ],
            watchers: '5',
          },
          latest_version: '3.0.2',
          licenses: ['Unlicense'],
          name: 'stream-buffers',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:stream-buffers',
          version: '3.0.2',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '30',
            dependent_projects: '7935',
            dependent_repos: '33757',
            first_release_date: null,
            forks_count: '193',
            issues: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            latest_release_duration: '2019-05-21 23:41:04',
            open_issues_count: '11',
            pull_requests: {
              month: {
                closed: -1,
                opened: -1,
              },
              year: {
                closed: -1,
                opened: -1,
              },
            },
            size: 'N/A',
            stargazers_count: '1367',
            total_releases: '242',
            used_by: [
              {
                name: 'avajs/ava',
                stars: '11797',
              },
              {
                name: 'browserify/browserify',
                stars: '11440',
              },
              {
                name: 'caolan/nodeunit',
                stars: '1904',
              },
              {
                name: 'isaacs/node-glob',
                stars: '3655',
              },
              {
                name: 'istanbuljs/nyc',
                stars: '1966',
              },
              {
                name: 'node-nock/nock',
                stars: '5570',
              },
              {
                name: 'npm/node-semver',
                stars: '1883',
              },
              {
                name: 'npm/npm',
                stars: '14322',
              },
              {
                name: 'substack/minimist',
                stars: '2376',
              },
              {
                name: 'substack/tape',
                stars: '4096',
              },
            ],
            watchers: '24',
          },
          latest_version: '14.11.0',
          licenses: ['ISC'],
          name: 'tap',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '',
          url: 'https://snyk.io/vuln/npm:tap',
          version: '11.1.5',
          vulnerable_dependencies: [],
        },
        {
          dependencies: [],
          ecosystem: 'npm',
          github: {
            contributors: '423',
            dependent_projects: '422',
            dependent_repos: '1098',
            first_release_date: null,
            forks_count: '4083',
            issues: {
              month: {
                closed: 59,
                opened: 56,
              },
              year: {
                closed: 1289,
                opened: 1292,
              },
            },
            latest_release_duration: '2019-05-01 19:30:48',
            open_issues_count: '1612',
            pull_requests: {
              month: {
                closed: 39,
                opened: 25,
              },
              year: {
                closed: 507,
                opened: 439,
              },
            },
            size: 'N/A',
            stargazers_count: '23659',
            total_releases: '314',
            used_by: [],
            watchers: '337',
          },
          latest_version: '0.2.32',
          licenses: ['MIT'],
          name: 'typeorm',
          private_vulnerabilities: [],
          public_vulnerabilities: [],
          recommended_version: '0.2.32',
          url: 'https://snyk.io/vuln/npm:typeorm',
          version: '0.2.32',
          vulnerable_dependencies: [],
        },
      ],
      ecosystem: 'npm',
      ended_at: '2021-04-02T16:58:32.392714',
      external_request_id: 'ed16d5db91d64e8d8d0ea6d1ba6b727e',
      license_analysis: {
        conflict_packages: [],
        current_stack_license: null,
        distinct_licenses: ['Apache-2.0', 'BSD', 'ISC', 'Unlicense', 'MIT'],
        outlier_packages: [],
        reason:
          'Cannot calculate stack license due to unknown dependencies or license not supported.',
        recommended_licenses: null,
        status: 'Failure',
        unknown_licenses: {
          component_conflict: [],
          unknown: [],
        },
      },
      manifest_file_path: 'package.json',
      manifest_name: 'npmlist.json',
      recommendation: {
        companion: [
          {
            cooccurrence_count: 0,
            cooccurrence_probability: 67.7461912674858,
            dependencies: null,
            ecosystem: 'npm',
            github: {
              contributors: '196',
              dependent_projects: '7338',
              dependent_repos: '25796',
              first_release_date: null,
              forks_count: '2976',
              issues: {
                month: {
                  closed: 1,
                  opened: 1,
                },
                year: {
                  closed: 53,
                  opened: 51,
                },
              },
              latest_release_duration: '2020-06-13 15:11:20',
              open_issues_count: '40',
              pull_requests: {
                month: {
                  closed: 0,
                  opened: 2,
                },
                year: {
                  closed: 35,
                  opened: 31,
                },
              },
              size: 'N/A',
              stargazers_count: '30960',
              total_releases: '90',
              used_by: [],
              watchers: '874',
            },
            latest_version: '2.13.1',
            licenses: [],
            name: 'koa',
            topic_list: [
              'accepts',
              'content-disposition',
              'content-type',
              'cookies',
              'debug',
              'delegates',
              'depd',
              'destroy',
              'error-inject',
              'escape-html',
              'fresh',
              'http-assert',
              'http-errors',
              'is-generator-function',
              'koa-compose',
              'koa-convert',
              'koa-is-json',
              'mime-types',
              'on-finished',
              'only',
              'parseurl',
              'statuses',
              'type-is',
              'vary',
            ],
            url: 'https://snyk.io/vuln/npm:koa',
            version: '2.12.1',
          },
          {
            cooccurrence_count: 0,
            cooccurrence_probability: 31.51298647011095,
            dependencies: null,
            ecosystem: 'npm',
            github: {
              contributors: '21',
              dependent_projects: '837',
              dependent_repos: '326514',
              first_release_date: null,
              forks_count: '176',
              issues: {
                month: {
                  closed: 1,
                  opened: 1,
                },
                year: {
                  closed: 4,
                  opened: 5,
                },
              },
              latest_release_duration: '2019-05-11 01:40:56',
              open_issues_count: '24',
              pull_requests: {
                month: {
                  closed: 0,
                  opened: 0,
                },
                year: {
                  closed: 1,
                  opened: 5,
                },
              },
              size: 'N/A',
              stargazers_count: '696',
              total_releases: '58',
              used_by: [
                {
                  name: 'ReactTraining/react-router',
                  stars: '25543',
                },
                {
                  name: 'ReactTraining/react-router',
                  stars: '25936',
                },
                {
                  name: 'angular/angular.js',
                  stars: '57140',
                },
                {
                  name: 'angular/angular.js',
                  stars: '57240',
                },
                {
                  name: 'angular/angular',
                  stars: '28759',
                },
                {
                  name: 'angular/angular',
                  stars: '29647',
                },
                {
                  name: 'expressjs/express',
                  stars: '34390',
                },
                {
                  name: 'expressjs/express',
                  stars: '34820',
                },
                {
                  name: 'facebook/jest',
                  stars: '12750',
                },
                {
                  name: 'facebook/jest',
                  stars: '13201',
                },
                {
                  name: 'facebook/react',
                  stars: '78172',
                },
                {
                  name: 'facebook/react',
                  stars: '80292',
                },
                {
                  name: 'postcss/autoprefixer',
                  stars: '13740',
                },
                {
                  name: 'postcss/autoprefixer',
                  stars: '13825',
                },
                {
                  name: 'postcss/postcss',
                  stars: '16244',
                },
                {
                  name: 'postcss/postcss',
                  stars: '16450',
                },
                {
                  name: 'reactjs/redux',
                  stars: '34734',
                },
                {
                  name: 'reactjs/redux',
                  stars: '34911',
                },
                {
                  name: 'webpack/webpack',
                  stars: '32862',
                },
                {
                  name: 'webpack/webpack',
                  stars: '33479',
                },
              ],
              watchers: '19',
            },
            latest_version: '0.17.1',
            licenses: [],
            name: 'send',
            topic_list: [
              'debug',
              'depd',
              'destroy',
              'encodeurl',
              'escape-html',
              'etag',
              'fresh',
              'http-errors',
              'mime',
              'ms',
              'on-finished',
              'range-parser',
              'statuses',
            ],
            url: 'https://snyk.io/vuln/npm:send',
            version: '0.17.1',
          },
        ],
        manifest_file_path: 'package.json',
        usage_outliers: [],
      },
      registration_link: 'https://snyk.io/login',
      registration_status: 'FREETIER',
      started_at: '2021-04-02T16:58:31.661930',
      unknown_dependencies: [],
      uuid: null,
      version: 'v2',
    }),
  );
});

app.listen(8080);
