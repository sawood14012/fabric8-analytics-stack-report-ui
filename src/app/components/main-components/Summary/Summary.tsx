import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  TextContent,
  Text,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
} from '@patternfly/react-core';
import { ShareSquareIcon, DownloadIcon } from '@patternfly/react-icons';
import './Summary.scss';
import SignUp from '../../shared-components/synk-signup/synk-signup';
import PoweredBySynk from '../../shared-components/powerd-by/powerd-by';
import BTSynktoken from '../../shared-components/synk-token-button/synk-token-button';
import Dependency from '../../shared-components/summary-detail/summary-detail';
import Security from '../../shared-components/security-detail/security-detail';
import Licenses from '../../shared-components/licenses-detail/licenses-detail';
import Addons from '../../shared-components/addons-detail/addons-detail';

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
              <Dependency />
            </GridItem>
            <GridItem span={6}>
              <Security />
            </GridItem>
            <Divider component="div" />
            <GridItem span={6}>
              <Licenses />
            </GridItem>
            <GridItem span={6}>
              <Addons />
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
