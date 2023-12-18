// src/App.js
import React from "react";
import Weather from "./components/Weather";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Redux Saga Weather App</h1>
        <Weather />
      </div>
    </Provider>
  );
};

export default App;
