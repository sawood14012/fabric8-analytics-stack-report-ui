import axios, { AxiosResponse, AxiosError } from "axios";
import { stageApiKey, stageApiUrl, localDevURL } from "./constants";
import { Logger } from "./logger";

async function GetStackDetails(requestId = "ed16d5db91d64e8d8d0ea6d1ba6b727e") {
    let result = {};
    const url = `${stageApiUrl}/api/v2/stack-analyses/${requestId}?user_key=${stageApiKey}`;
    Logger.log(url);
    const config = getConfig();
    console.log(config);
    const devUrl = localDevURL;
    await axios
      .get(url, config)
      .then((res: AxiosResponse) => {
        if(res.status === 200){
          result = res.data;
          localStorage.setItem("requestId", res.data.external_request_id)
        }
      })
      .catch((err) => {
        Logger.log(err);
      });
  return result;
}

function getConfig(){
  if(localStorage.getItem("UUID") !== null){
      return {
        headers: {
          // @ts-ignore
          UUID: localStorage.getItem("UUID"),
        },
      }
  }
  return {
    headers: {},
  }
}

async function RegisterUser(snykToken : string, uuid: string) {
  const data = {
    snyk_api_token: snykToken,
    user_id: uuid,
  };
  let result = '';
  console.log(snykToken);
  console.log("function start")
  const url = `${stageApiUrl}/user?user_key=${stageApiKey}`; 
  await axios.put(url, data).then((res: AxiosResponse) => {
      if(res.status === 200){
        result = res.data.user_id;
      }
  }).catch((error : AxiosError) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    }
  }); 
  return result;
}

async function GetUUID() {
  const UUID = localStorage.getItem("UUID");
  const url = `${stageApiUrl}/user?user_key=${stageApiKey}`;
  let result = '';
  if(UUID !== null){
    result = UUID;
  }
  else {
    await axios.post(url).then((res : AxiosResponse) => {
      if(res.status === 200){
        result = res.data.user_id;
      }
    }).catch((error : AxiosError) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    });
  }
  return result;
}



export { GetStackDetails, RegisterUser, GetUUID };
