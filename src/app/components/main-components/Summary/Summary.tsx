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

type SummaryState = {
  dependency: Record<string, number>;
  addons: Record<string, number>;
  licenses: Record<string, number>;
  security: Record<string, number>;
};

// eslint-disable-next-line
type SummaryProps = Record<any, any>;

class SummaryCard extends React.Component<SummaryProps, SummaryState> {
  showsignup = true;

  signUpText =
    'Sign up for a free Snyk account to find out about the vulnerabilities that have been found, and whether any have a publicly known exploit';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {
      dependency: {
        analyzed: 17,
        transitive: 112,
        unknown: 10,
      },
      addons: {
        companion: 3,
      },
      licenses: {
        conflicts: 2,
        unknown: 1,
      },
      security: {
        vlunerablities: 87,
        vulnerable: 18,
      },
    };
  }

  render() {
    const { dependency, addons, licenses, security } = this.state;
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
              <ShareSquareIcon className="icon-class" />
            </FlexItem>
            <FlexItem>
              <DownloadIcon className="icon-class" />
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
              <Dependency
                analyzed={dependency.analyzed}
                transitive={dependency.transitive}
                unknown={dependency.unknown}
              />
            </GridItem>
            <GridItem span={6}>
              <Security
                vlunerablities={security.vlunerablities}
                vulnerable={security.vulnerable}
              />
            </GridItem>
            <Divider component="div" />
            <GridItem span={6}>
              <Licenses
                conflicts={licenses.conflicts}
                unknown={licenses.unknown}
              />
            </GridItem>
            <GridItem span={6}>
              <Addons companion={addons.companion} />
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    );
  }
}

export default SummaryCard;
