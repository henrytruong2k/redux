import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers/rootReducers";

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducers, composeEnhancers);

export default store;
