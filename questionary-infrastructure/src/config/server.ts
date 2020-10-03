interface ConfigServer {
  port: number;
  env: string;
  devEnv?: boolean;
}

let serverConfig: ConfigServer = {
  port: process.env.PORT as unknown as number || 3001,
  env: process.env.NODE_ENV || 'development'
}

serverConfig = {
  ...serverConfig,
  devEnv: serverConfig.env === 'development'
}

export {
  serverConfig
}