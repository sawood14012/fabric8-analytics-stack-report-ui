import { useReducer } from "react";

const initialState = {
  APIData: {},
  Loading: false,
  IsRegUser: false,
  UUID: null,
};

const reducer = (state: any, action: { type: any; data: any }) => {
  switch (action.type) {
    case "APIData":
      return {
        ...state,
        APIData: action.data,
        IsRegUser: action.data?.registration_status === "REGISTERED",
      };
    case "Loading":
      return {
        ...state,
        Loading: action.data,
      };
    case "UUID":
      return {
        ...state,
        UUID: action.data,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  return { globalState, globalDispatch };
};

export default useGlobalState;
