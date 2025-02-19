import { useEffect, type ReactElement } from 'react';

import { environmentVariables } from '@/config';

type Props = {
  title: string;
  children: ReactElement;
};

export const Titled = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${environmentVariables.PROJECT_NAME} - ${title}`;
  }, [title]);

  return children;
};
