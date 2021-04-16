import { useReducer } from 'react';

const reducer = (
  state: Record<string, unknown>,
  action: Record<string, unknown>,
) => {
  switch (action.type) {
    case 'APIData':
      return {
        ...state,
        APIData: action.data,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    APIData: {},
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
