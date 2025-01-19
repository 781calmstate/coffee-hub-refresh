import 'dotenv/config';

type EnvironmentVariables = {
  BASE_URL: string;
  PROJECT_NAME: string;
  ENV: string;
};

const environmentVariables: EnvironmentVariables = {
  BASE_URL: process.env.BASE_URL || '',
  PROJECT_NAME: process.env.PROJECT_NAME || '',
  ENV: process.env.ENV || '',
};

Object.values(environmentVariables).forEach(value => {
  if (!value) {
    throw new Error('Missing environment variable');
  }
});

export { environmentVariables };
export type { EnvironmentVariables };
