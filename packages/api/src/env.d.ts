declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      DB_HOST: string;
      DB_PORT: string;
      DATABASE_URL: string;
      PORT: string;
      CONSUMER_URLS: string;
      CLIENT_URL: string;
      JWT_SECRET: string;
      BASE_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      FACEBOOK_CLIENT_ID: string;
      FACEBOOK_CLIENT_SECRET: string;
    }
  }
}
export {};
