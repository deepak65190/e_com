import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import CardProvider from "./context/Card.jsx";
import { SearchProvider } from "./context/Search.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <CardProvider>
      <SearchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchProvider>
    </CardProvider>
  </ChakraProvider>
);
