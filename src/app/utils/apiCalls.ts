import axios, { AxiosResponse, AxiosError } from "axios";
import { useContext, useEffect } from "react";
import Context from "../store/context";
import { stageApiKey, stageApiUrl, localDevURL } from "./constants";
import { Logger } from "./logger";

function GetStackDetails(requestId = "ed16d5db91d64e8d8d0ea6d1ba6b727e") {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);
  useEffect(() => {
    globalDispatch({ type: "Loading", data: true });
    const url = `${stageApiUrl}/api/v2/stack-analyses/${requestId}?user_key=${stageApiKey}`;
    Logger.log(url);
    const config = {
      headers: {
        UUID: "2527bcb9-9db1-4c8f-b304-c3b232ebd22f",
      },
    };
    Logger.log(config);
    const devUrl = localDevURL;
    axios
      .get(url)
      .then((res: { data: any }) => {
        globalDispatch({ type: "APIData", data: res.data });
        globalDispatch({ type: "Loading", data: false });
        Logger.log(res.data);
      })
      .catch((err) => {
        Logger.log(err);
        Logger.log(globalState);
        Logger.log(globalDispatch);
      });
  }, []);
}

function RegisterUser(snyk_token = "") {
  // @ts-ignore
  const { globalState, globalDispatch } = useContext(Context);

  useEffect(() => {
    const UUID = localStorage.getItem("UUID");
    if (UUID === null) {
      const url = `${stageApiUrl}/user?user_key=${stageApiKey}`;
      axios
        .post(url)
        .then((res: AxiosResponse) => {
          const result = res.data;
          // @ts-ignore
          if (res.status === 200) {
            const data = {
              snyk_api_token: snyk_token,
              user_id: result.user_id,
            };
            axios
              .put(url, data)
              .then((response: AxiosResponse) => {
                if (response.status === 200) {
                  globalDispatch({ type: "UUID", data: response.data.user_id });
                  localStorage.setItem("UUID", response.data.user_id);
                }
              })
              .catch((error) => {
                if (error.response) {
                  Logger.log(error.response.data);
                  Logger.log(error.response.status);
                }
              });
          }
        })
        .catch((error) => {
          if (error.response) {
            Logger.log(error.response.data);
            Logger.log(error.response.status);
          }
        });
    }
  }, []);
}

export { GetStackDetails, RegisterUser };
