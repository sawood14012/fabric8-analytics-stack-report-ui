import React, { useContext, useEffect, useState } from "react";
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
  Skeleton,
  Gallery,
  GalleryItem,
  CardFooter,
} from "@patternfly/react-core";
import { ShareSquareIcon, DownloadIcon } from "@patternfly/react-icons";
import "./Summary.scss";
import SignUp from "../../shared-components/synk-signup/synk-signup";
import PoweredBySynk from "../../shared-components/powerd-by/powerd-by";
import BTSynktoken from "../../shared-components/synk-token-button/synk-token-button";
import Dependency from "../../shared-components/summary-detail/summary-detail";
import Security from "../../shared-components/security-detail/security-detail";
import Licenses from "../../shared-components/licenses-detail/licenses-detail";
import Addons from "../../shared-components/addons-detail/addons-detail";
import Context from "../../../store/context";
import Utils from "../../../utils/utility";

type SummaryState = {
  dependency: Record<string, number>;
  addons: Record<string, number>;
  licenses: Record<string, number>;
  security: Record<string, number>;
};

// eslint-disable-next-line
type SummaryProps = Record<any, any>;

const SummaryCard = () => {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  const [Analyzed, setAnalyzed] = useState(0);
  const [Transitive, setTransitive] = useState(0);
  const [Unknown, setUnknown] = useState(0);
  const [Vlunerablities, setVlunerablities] = useState(0);
  const [Vulnerable, setVulnerable] = useState(0);
  const [LicenseConflicts, setLicenseConflicts] = useState(0);
  const [LicenseUnknown, setLicenseUnknown] = useState(0);
  const [Companion, setCompanion] = useState(0);
  const [Showsignup, setShowSignup] = useState(false);
  const [Load, setLoad] = useState(false);
  const utils = new Utils();

  const signUpText =
    "Sign up for a free Snyk account to find out about the vulnerabilities that have been found, and whether any have a publicly known exploit";

  useEffect(() => {
    const analyzedDependencies = globalState.APIData?.analyzed_dependencies;
    const unknownDependencies = globalState.APIData?.unknown_dependencies;
    const TransitiveDeps = utils.GetTransitiveCount(analyzedDependencies);
    const LicensesD = globalState.APIData?.license_analysis;
    const SecurityData = utils.GetTotalVulnerabilityCount(analyzedDependencies);
    const RecommendationD = globalState.APIData?.recommendation;
    const loading = globalState.Loading;
    const isRegisteredUser = globalState.IsRegUser;
    const uuid = globalState.APIData?.uuid;
    const registeredfeild = globalState.APIData?.registration_status
    // const isReg = globalState.IsRegUser;
    setLoad(loading);
    if (isRegisteredUser) {
      console.log(registeredfeild);
      setShowSignup(true);
    }


    setAnalyzed(analyzedDependencies?.length);
    setUnknown(unknownDependencies?.length);
    setLicenseConflicts(LicensesD?.conflict_packages.length);
    setLicenseUnknown(LicensesD?.unknown_licenses.unknown.length);
    setVlunerablities(SecurityData?.total);
    setVulnerable(SecurityData?.vulnerable);
    setCompanion(RecommendationD?.companion.length);
    setTransitive(TransitiveDeps);

    // @ts-ignore
  }, [globalState]);

  return (
    <Card isHoverable className="GridCard">
      <CardTitle className="">
        <Flex>
          <FlexItem>
            <TextContent>
              <Text className="heading"> Summary of the stack </Text>
            </TextContent>
          </FlexItem>
          <FlexItem>
            <BTSynktoken isUUID={Showsignup} />
          </FlexItem>
          <FlexItem align={{ default: "alignRight" }}>
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
        <SignUp isUUID={Showsignup} />
        <br />
        <Grid hasGutter>
          <GridItem span={6}>
            <Dependency
              analyzed={Analyzed}
              transitive={Transitive}
              unknown={Unknown}
            />
          </GridItem>
          <GridItem span={6}>
            <Security vulnerablities={Vlunerablities} vulnerable={Vulnerable} />
          </GridItem>
          <Divider component="div" />
          <GridItem span={6}>
            <Licenses conflicts={LicenseConflicts} unknown={LicenseUnknown} />
          </GridItem>
          <GridItem span={6}>
            <Addons companion={Companion} />
          </GridItem>
        </Grid>
      </CardBody> 
    </Card>
  );
};


export default SummaryCard;
