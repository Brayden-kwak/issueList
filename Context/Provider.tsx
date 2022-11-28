import {createContext} from 'react';

export type State = {
  title: string;
};

export const Context = createContext<State | null>(null);

export const Provider = ({children}: {children: React.ReactNode}) => {
  const title = 'Angular/Angular-cli';
  return <Context.Provider value={{title}}>{children}</Context.Provider>;
};
