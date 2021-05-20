import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  FormGroup,
  TextInput,
  FormHelperText,
} from "@patternfly/react-core";
import {
  CheckSquareIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@patternfly/react-icons";
import PoweredBySynk from "../powerd-by/powerd-by";
import { RegisterUser, GetUUID, GetStackDetails } from "../../../utils/apiCalls";
import Context from "../../../store/context";

type Signprop = {
  isUUID: boolean;
};

type State = {
  isModalOpen: boolean;
};

type Modalprops = {
  isModalOpen: boolean;
  handleToggle: () => void;
};

function RegisterAndSetUUID(token: string, globalDispatch: any){
  globalDispatch({ type: "Loading", data: true });
  GetUUID().then((uuid)=>{
    RegisterUser(token, uuid).then((res)=>{
      globalDispatch({ type: "UUID", data: res })
      localStorage.setItem("UUID", res);
      const requestId = localStorage.getItem("requestId")
      GetStackDetails(requestId != null? requestId: "").then((result)=>{
        globalDispatch({ type: "APIData", data: result });
        globalDispatch({ type: "Loading", data: false });
      });
    });
  });
}

const ModalComponent = ({ isModalOpen, handleToggle }: Modalprops) => {
  const text =
    " to get your free Snyk token and get access to all premium fields.";
  const [tokenValue, setTokenValue] = useState("");
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <Modal
      width="40%"
      title="Snyk Token Submission"
      isOpen={isModalOpen}
      onClose={handleToggle}
      actions={[
        <Button key="confirm" variant="primary" onClick={()=> {RegisterAndSetUUID(tokenValue, globalDispatch); handleToggle();}}>
          Submit
        </Button>,
        <Button key="cancel" variant="link" onClick={handleToggle}>
          Close
        </Button>,
      ]}
    >
      <Form>
        <FormGroup
          label="Snyk Token"
          isRequired
          fieldId="Synk token form group"
          helperText={
            <FormHelperText
              icon={<ExclamationCircleIcon color="blue" />}
              isHidden={false}
            >
              If a keyboard shortcut for Paste is not available, try using Edit
              &gt; Paste
            </FormHelperText>
          }
        >
          <TextInput
            isRequired
            placeholder="Enter your Snyk token"
            id="Snyk-token-text"
            name="snyk-token-text"
            type="text"
            onChange={setTokenValue}
            value={tokenValue}
          />
        </FormGroup>
      </Form>
      <br />
      <PoweredBySynk />
      <a
        href="https://app.snyk.io/login?utm_campaign=Code-Ready-Analytics-2020&utm_source=code_ready&code_ready=FF1B53D9-57BE-4613-96D7-1D06066C38C9"
        target="_blank"
        rel="noreferrer"
      >
        Sign up
      </a>
      {text}
    </Modal>
  );
};

const BTSynktoken = ({ isUUID }: Signprop) => {
  const [isModalOpen, setModalValue] = useState(false);

  if (isUUID === false) {
    return (
      <div>
        <Button
          icon={<ExclamationTriangleIcon />}
          iconPosition="right"
          className="warningbtn"
          isSmall
          variant="warning"
          onClick={() => setModalValue(!isModalOpen)}
        >
          Snyk Token
        </Button>
        <ModalComponent
          isModalOpen={isModalOpen}
          handleToggle={() => setModalValue(!isModalOpen)}
        />
      </div>
    );
  }
  return (
    <div>
      <Button
        icon={<CheckSquareIcon />}
        iconPosition="right"
        className="mybutton"
        isSmall
        variant="warning"
        onClick={() => setModalValue(!isModalOpen)}
      >
        Snyk Token
      </Button>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleToggle={() => setModalValue(!isModalOpen)}
      />
    </div>
  );
};

export default BTSynktoken;
