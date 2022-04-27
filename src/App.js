import React from "react";
import "./App.css";
import Router from "./HOC/router/Router.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </CookiesProvider>
  );
}

export default App;
