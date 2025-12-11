/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_PRODUCTION_HOSTNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
