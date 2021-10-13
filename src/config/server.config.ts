namespace ServerConfig {
  const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "local";

  // * Check is production
  export function isProduction(): Readonly<boolean> {
    return NODE_ENV === "prod";
  }

  export function isDevelopment(): Readonly<boolean> {
    return NODE_ENV === "development";
  }

  // * Check is local
  export function isLocal(): Readonly<boolean> {
    return NODE_ENV === "local";
  }

  export function getBackendUrl(): Readonly<string> {
    if (isProduction()) {
      return "https://my-prod-url";
    } else if (isDevelopment()) {
      return "http://localhost:16900";
    }
    return "http://localhost:16900";
  }
}

export default ServerConfig;
