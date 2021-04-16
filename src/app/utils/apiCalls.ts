import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Context from '../store/context';
import { stageApiKey, stageApiUrl, localDevURL } from './constants';
import { Logger } from './logger';

function GetStackDetails(requestId = 'ed16d5db91d64e8d8d0ea6d1ba6b727e') {
  const { globalDispatch } = useContext(Context);
  useEffect(() => {
    const url = `${stageApiUrl}/api/v2/stack-analyses/${requestId}?user_key=${stageApiKey}`;
    const config = {
      headers: {
        UUID: '2527bcb9-9db1-4c8f-b304-c3b232ebd22f',
      },
    };
    const devUrl = localDevURL;
    axios
      .get(devUrl)
      .then((res) => {
        globalDispatch({ type: 'APIData', data: res.data });
        Logger.log(res.data);
      })
      .catch((err) => {
        Logger.log(err);
      });
  }, []);
}

export { GetStackDetails };
