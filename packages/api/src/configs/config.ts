import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 4000,
  },
  cors: {
    enabled: true,
    consumerUrls: process.env.CONSUMER_URLS,
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
    jwtSecret: process.env.JWT_SECRET,
    bcryptSaltOrRound: 10,
  },
  oauth: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
      scope: ['profile', 'email'],
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/facebook/callback`,
      scope: ['email'],
      profileFields: ['id', 'emails', 'name', 'picture'],
    },
  },
};

export default (): Config => config;
