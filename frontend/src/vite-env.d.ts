/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CURRENCY_API_KEY: string;
  readonly VITE_API_TICKETS_URL: string;
  readonly VITE_SOME_KEY: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
