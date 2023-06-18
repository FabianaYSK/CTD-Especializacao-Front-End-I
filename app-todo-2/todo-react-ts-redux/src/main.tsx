import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import TasksReducer from "./reducers/task-reducer.ts";

const store = createStore(
  combineReducers({
    tasks: TasksReducer,
  })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
