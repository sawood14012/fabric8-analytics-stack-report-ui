import {
  Backdrop,
  Bullseye,
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  Page,
  PageSection,
  PageSectionVariants,
  Title,
} from "@patternfly/react-core";
import { PathMissingIcon, InProgressIcon } from "@patternfly/react-icons";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../../store/context";

const ErrorPage = () => {
  // @ts-ignore
  const { globalState } = useContext(Context);
  const [message, setMessage] = useState("Oops Something Went Wrong..!");
  const [code, setCode] = useState("");
  useEffect(() => {
    const { ErrorData } = globalState;
    const status = ErrorData.code.toString();
    setMessage(ErrorData.data.error);
    setCode(status);
  }, [globalState]);
  return (
    <Backdrop className="myBackdrop">
      <Page>
        <PageSection
          height="1340px"
          isFilled
          variant={PageSectionVariants.dark}
        >
          <Bullseye>
            <EmptyState variant={EmptyStateVariant.xl}>
              {Number(code) === 202 ? (
                <EmptyStateIcon icon={InProgressIcon} />
              ) : (
                <EmptyStateIcon icon={PathMissingIcon} />
              )}
              <Title headingLevel="h5" size="4xl">
                {code}
              </Title>
              <EmptyStateBody>{message}</EmptyStateBody>
            </EmptyState>
          </Bullseye>
        </PageSection>
      </Page>
    </Backdrop>
  );
};

export default ErrorPage;
