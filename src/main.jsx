import * as React from "react";
import * as ReactDOM from "react-dom/client";
import store from "./store/index"
import Router from "./pages/Router"
import { Provider } from 'react-redux'

//React entry point for ./web/index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  
  //React Redux wrapper to maintain global store state
  <Provider store={store}>

    <Router/>

  </Provider>
  
);