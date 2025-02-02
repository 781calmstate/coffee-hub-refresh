type EnvironmentVariables = {
  BASE_URL: string;
  PROJECT_NAME: string;
  ENV: string;
};

const environmentVariables: EnvironmentVariables = {
  BASE_URL: import.meta.env.VITE_BASE_URL || '',
  PROJECT_NAME: import.meta.env.VITE_PROJECT_NAME || '',
  ENV: import.meta.env.VITE_ENV || '',
};

Object.entries(environmentVariables).forEach(([key, value]) => {
  if (!value) {
    throw new Error('Missing environment variable: ' + key);
  }
});

export { environmentVariables };
export type { EnvironmentVariables };
