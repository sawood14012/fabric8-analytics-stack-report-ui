import React from 'react';
import useGlobalState from './useGlobalState';
import Context from './context';

interface IProps {
  // eslint-disable-next-line
  children: any;
}

const GlobalStateProvider = ({ children }: IProps) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
};

export default GlobalStateProvider;
