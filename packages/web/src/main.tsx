import { ChakraProvider } from "@chakra-ui/react";
import { DarkModder } from "@components";
import { theme, ThemeProvider } from "@utils";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import "focus-visible/dist/focus-visible";
import * as dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ThemeProvider>
          <DarkModder>
            <App />
          </DarkModder>
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
