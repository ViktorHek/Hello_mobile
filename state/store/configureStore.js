import { createStore } from "redux";
import initialState from "./initialState";
import rootReducer from "../reducer/rootReducer"

const store = createStore(rootReducer, initialState)

export default store