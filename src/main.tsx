import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
import theme from "./style/theme.ts";
import { store } from "./store/store.ts";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
        <App />
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
