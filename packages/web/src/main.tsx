import { ChakraProvider } from "@chakra-ui/react";
import { DarkModder } from "@components";
import { theme, ThemeProvider } from "@utils";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";

export const queryClient = new QueryClient();

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
