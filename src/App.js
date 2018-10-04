import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import "./styles/final/css/ap.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/create" component={CreateProject} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
