import merge from "lodash/merge";
import { configureRefreshFetch, fetchJSON } from "refresh-fetch";

const endpointUrl = import.meta.env.VITE_PUBLIC_SERVER_URL;

//  Private closures:
// https://auth0.com/docs/tokens/token-storage#browser-in-memory-scenarios
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures
const tokenStore = (function () {
  let accessToken: string = null;

  return {
    setAccessToken: function (token: string) {
      accessToken = token;
    },

    getAccessToken: function () {
      return accessToken;
    },

    clearAccessToken: function () {
      accessToken = null;
    },
  };
})();

const fetchJSONWithToken = (url: string, options = {}) => {
  const token = tokenStore.getAccessToken();

  let optionsWithToken = options;
  if (token != null) {
    optionsWithToken = merge({}, options, {
      headers: {
        Authorization: `Bearer ${tokenStore.getAccessToken()}`,
      },
    });
  }

  return fetchJSON(url, optionsWithToken).then((res) =>
    res.body.errors ? Promise.reject(res.body.errors[0]) : res
  );
};

const shouldRefreshToken = (error) => {
  return (
    error.extensions.exception.status === 401 &&
    error.extensions.exception.message === "Unauthorized"
  );
};

const refreshToken = async () => {
  // let history = createBrowserHistory();

  try {
    const res = await fetchJSONWithToken(`${endpointUrl}/auth/refresh_token`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.body.ok) {
      window.location.pathname = "/login";
    }

    tokenStore.setAccessToken(res.body.accessToken);
    return res.body;
  } catch (error) {
    tokenStore.clearAccessToken();
    throw error;
  }
};

export const fetch = configureRefreshFetch({
  shouldRefreshToken,
  refreshToken,
  fetch: fetchJSONWithToken,
});

export const client = <TData, TVariables>(
  query: string,
  variables?: TVariables
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(endpointUrl, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ query, variables }),
    });

    return res.body.data;
  };
};
