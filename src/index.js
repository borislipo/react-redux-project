import React from "react";
import reactDom from "react-dom";
import AddPhoto from "./components/AddPhoto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import rootReducer from './redux/reducer';
import Main from "./components/Main";
import Single from "./components/Single";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
) );

  reactDom.render(<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Main/>} />
      <Route path='/AddPhoto' element={<AddPhoto />} />
      <Route path='/Single/:id' element={<Single />} />
    </Routes>
  </BrowserRouter></Provider>, document.getElementById("root")); 