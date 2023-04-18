import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import BookmarkReducer from "./reducers/bookmarkReducers";

const rootReducer = combineReducers({
  bookmark: BookmarkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
