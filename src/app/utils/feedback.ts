/* eslint-disable no-console */
import axios, { AxiosResponse, AxiosError } from "axios";
import { url } from "node:inspector";
import { Logger } from "./logger";

function submitFeedback(data: any) {
    const url='https://recommender.api.openshift.io/api/v1/user-feedback';
    axios({
        method: 'post',
        url: url,
        headers: {}, 
        data: {
          foo: 'bar', // This is the body part
        }
      }).then(response => {
        console.log(response);
    });;
}
