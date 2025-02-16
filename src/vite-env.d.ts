/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_PROJECT_NAME: string;
  readonly VITE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
