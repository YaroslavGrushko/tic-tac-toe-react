import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./containers/App/App";
import { store } from "./state/store";

import "./index.css";

const render = async () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

render();
