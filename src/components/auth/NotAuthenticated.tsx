import { type ReactElement } from 'react';

type Props = {
  children: ReactElement;
  redirectTo?: string;
};

const NotAuthenticated = ({ children }: Props) => {
  return children;
};

export default NotAuthenticated;
