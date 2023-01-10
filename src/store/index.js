import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import { rootReduser } from "./root-reduser";
import * as api from "../config"

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReduser,
  composeEnhansers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,

      })
    )
  )
);

export { store };
