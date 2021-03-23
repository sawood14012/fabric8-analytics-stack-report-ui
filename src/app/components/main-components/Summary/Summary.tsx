import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Split,
  SplitItem,
  TextContent,
  Text,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Title,
} from '@patternfly/react-core';
import {
  CubeIcon,
  SecurityIcon,
  FileAltIcon,
  ZoneIcon,
  ShareSquareIcon,
  DownloadIcon,
  ExclamationCircleIcon,
} from '@patternfly/react-icons';
import './Summary.scss';
import SignUp from '../../shared-components/synk-signup/synk-signup';
import PoweredBySynk from '../../shared-components/powerd-by/powerd-by';
import BTSynktoken from '../../shared-components/synk-token-button/synk-token-button';

class SummaryCard extends React.Component {
  showsignup = true;

  signUpText =
    'Sign up for a free Snyk account to find out about the vulnerabilities that have been found, and whether any have a publicly known exploit';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="--pf-c-card--BoxShadow summary-of-the-stack">
        <CardTitle className="">
          <Flex>
            <FlexItem>
              <TextContent>
                <Text className="heading"> Summary of the stack </Text>
              </TextContent>
            </FlexItem>
            <FlexItem>
              <BTSynktoken isUUID={this.showsignup} />
            </FlexItem>
            <FlexItem align={{ default: 'alignRight' }}>
              <ShareSquareIcon color="#6A6E73" />
            </FlexItem>
            <FlexItem>
              <DownloadIcon color="#6A6E73" />
            </FlexItem>
          </Flex>
        </CardTitle>
        <Divider />
        <CardBody>
          <PoweredBySynk />
          <SignUp isUUID={this.showsignup} />
          <br />
          <Grid hasGutter>
            <GridItem span={6}>
              <Flex>
                <FlexItem>
                  <CubeIcon className="icon-class" />
                </FlexItem>
                <FlexItem>
                  <Title headingLevel="h6" size="md">
                    Dependency Details
                  </Title>
                </FlexItem>
              </Flex>
              <Flex>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Analysed dependencies:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        17
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Transitive dependencies:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        112
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Unknown dependencies:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        10
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
              </Flex>
            </GridItem>
            <GridItem span={6}>
              <Flex>
                <FlexItem>
                  <SecurityIcon className="icon-class" />
                </FlexItem>
                <FlexItem>
                  <Title headingLevel="h6" size="md">
                    Security Issues
                  </Title>
                </FlexItem>
                <FlexItem>
                  <ExclamationCircleIcon color="#C9190B" />
                </FlexItem>
              </Flex>
              <Flex>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Total vulnerabilities:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        87
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Vulnerable dependencies:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        18
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
              </Flex>
            </GridItem>
            <Divider component="div" />
            <GridItem span={6}>
              <Flex>
                <FlexItem>
                  <FileAltIcon className="icon-class" />
                </FlexItem>
                <FlexItem>
                  <Title headingLevel="h6" size="md">
                    Licences
                  </Title>
                </FlexItem>
                <FlexItem>
                  <ExclamationCircleIcon color="#C9190B" />
                </FlexItem>
              </Flex>
              <Flex>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>License conflicts:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        2
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Unknown licenses:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        1
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
              </Flex>
            </GridItem>
            <GridItem span={6}>
              <Flex>
                <FlexItem>
                  <ZoneIcon className="icon-class" />
                </FlexItem>
                <FlexItem>
                  <Title headingLevel="h6" size="md">
                    Add-ons
                  </Title>
                </FlexItem>
              </Flex>
              <Flex direction={{ default: 'column' }}>
                <FlexItem>
                  <Split hasGutter>
                    <SplitItem>Companion Dependencies:</SplitItem>
                    <SplitItem>
                      <Title headingLevel="h6" size="md">
                        3
                      </Title>
                    </SplitItem>
                  </Split>
                </FlexItem>
              </Flex>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    );
  }
}

/* const Dependency = () =>{

} */

export default SummaryCard;
