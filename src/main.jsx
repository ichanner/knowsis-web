import * as React from "react";
import * as ReactDOM from "react-dom/client";
import store from "./store/index"
import Router from "./pages/Router"
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles';

//React entry point for ./web/index.html
ReactDOM.createRoot(document.getElementById("root")).render(
   
    //Overrides Mui CSS files with our own
    <StyledEngineProvider injectFirst>
	  
	  <Provider store={store}>

	    <Router/>

	  </Provider>

    </StyledEngineProvider>
  
);