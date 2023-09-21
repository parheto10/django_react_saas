import React, {Component} from "react";
// import Root from "./Root";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Signup from "./Component/signup/Signup";
import Login from "./Component/login/Login";
import Dashboard from "./Component/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route exact path='/' element={<Home />} />
            <Route path="*">Ups</Route>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
