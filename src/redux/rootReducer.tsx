import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import quizReducer from "./slices/quiz";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["settings"],
};

// const authPersistConfig = {
//   key: 'authJwt',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['isAuthenticated']
// };

const rootReducer = combineReducers({
  // authJwt: persistReducer(authPersistConfig, authJwtReducer),
  // collection: collectionReducer,
  quiz: quizReducer,
});

export { rootPersistConfig, rootReducer };
