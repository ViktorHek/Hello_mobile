import React from "react";
import { Provider } from "react-redux";
import store from "./state/store/configureStore";
import { registerRootComponent } from "expo";
import App from "./App";

const connectedApp = () => <Provider store={store}><App/></Provider>

registerRootComponent(connectedApp);
