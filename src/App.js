import React from "react";
import {
    Routes,BrowserRouter,
    Route
  } from 'react-router-dom';
import { createBrowserHistory } from "history";
import HeaderComponent from "./HeaderComponent";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
    <Routes history={history}>
      <Route exact path="/" element={<HeaderComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;