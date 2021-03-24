import React, { useState } from 'react';
import {
  Button,
  Modal,
  Form,
  FormGroup,
  TextInput,
  FormHelperText,
} from '@patternfly/react-core';
import {
  CheckSquareIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@patternfly/react-icons';
import PoweredBySynk from '../powerd-by/powerd-by';

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

const ModalComponent = ({ isModalOpen, handleToggle }: Modalprops) => {
  const text =
    ' to get your free Snyk token and get access to all premium fields.';
  const [tokenValue, setTokenValue] = useState('');

  return (
    <Modal
      width="40%"
      title="Snyk Token Submission"
      isOpen={isModalOpen}
      onClose={handleToggle}
      actions={[
        <Button key="confirm" variant="primary" onClick={handleToggle}>
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

class BTSynktoken extends React.Component<Signprop, State> {
  handleModalToggle: () => void;

  constructor(props: Signprop) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen,
      }));
    };
  }

  render() {
    const { isUUID } = this.props;
    const { isModalOpen } = this.state;
    if (isUUID === false) {
      return (
        <div>
          <Button
            icon={<ExclamationTriangleIcon />}
            iconPosition="right"
            className="warningbtn"
            isSmall
            variant="warning"
            onClick={this.handleModalToggle}
          >
            Snyk Token
          </Button>
          <ModalComponent
            isModalOpen={isModalOpen}
            handleToggle={this.handleModalToggle}
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
          onClick={this.handleModalToggle}
        >
          Snyk Token
        </Button>
        <ModalComponent
          isModalOpen={isModalOpen}
          handleToggle={this.handleModalToggle}
        />
      </div>
    );
  }
}

export default BTSynktoken;
