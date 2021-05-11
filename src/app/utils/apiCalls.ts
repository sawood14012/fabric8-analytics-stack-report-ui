import axios from 'axios';
import { useContext, useEffect } from 'react';
import Context from '../store/context';
import { stageApiKey, stageApiUrl, localDevURL } from './constants';
import { Logger } from './logger';

function GetStackDetails(requestId = 'ed16d5db91d64e8d8d0ea6d1ba6b727e') {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  useEffect(() => {
    const url = `${stageApiUrl}/api/v2/stack-analyses/${requestId}?user_key=${stageApiKey}`;
    Logger.log(url);
    const config = {
      headers: {
        UUID: '2527bcb9-9db1-4c8f-b304-c3b232ebd22f',
      },
    };
    Logger.log(config);
    const devUrl = localDevURL;
    axios
      .get(devUrl)
      .then((res: { data: any }) => {
        globalDispatch({ type: 'APIData', data: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        Logger.log(err);
        Logger.log(globalState);
        Logger.log(globalDispatch);
      });
  }, []);
}

export { GetStackDetails };
