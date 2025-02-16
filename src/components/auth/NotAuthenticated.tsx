import { type ReactElement } from 'react';

type Props = {
  children: ReactElement;
  redirectTo?: string;
};

export const NotAuthenticated = ({ children }: Props) => {
  return children;
};
