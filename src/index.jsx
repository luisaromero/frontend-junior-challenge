import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { fetchTodo } from './reducers/todoSlice';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(fetchTodo());


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
