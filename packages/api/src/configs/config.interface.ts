export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  oauth: OauthConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
  consumerUrls: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  jwtSecret: string;
  bcryptSaltOrRound: string | number;
}

export interface OauthConfigGoogle {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope: string[];
}

export interface OauthConfigFacebook {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope: string[];
  profileFields: string[];
}

export interface OauthConfig {
  google: OauthConfigGoogle;
  facebook: OauthConfigFacebook;
}
