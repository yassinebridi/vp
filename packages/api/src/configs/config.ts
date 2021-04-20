import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
    consumerUrls: import.meta.env.CONSUMER_URLS,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    jwtSecret: import.meta.env.JWT_SECRET,
    bcryptSaltOrRound: 10,
  },
  oauth: {
    google: {
      clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
      callbackURL: `${import.meta.env.VITE_BASE_URL}/auth/google/callback`,
      scope: ['profile', 'email'],
    },
    facebook: {
      clientID: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
      clientSecret: import.meta.env.VITE_FACEBOOK_CLIENT_SECRET,
      callbackURL: `${import.meta.env.VITE_BASE_URL}/auth/facebook/callback`,
      scope: ['email'],
      profileFields: ['id', 'emails', 'name', 'picture'],
    },
  },
};

export default (): Config => config;
