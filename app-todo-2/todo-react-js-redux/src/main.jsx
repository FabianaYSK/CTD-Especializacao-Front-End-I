import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import TasksReducer from "./reducers/tasks-reducer.js";

const store = createStore(
  combineReducers({
    tasks: TasksReducer,
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
