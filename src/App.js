import React, { Component } from "react";

import { Sidebar } from "./containers/Sidebar";
import { MessegesList } from "./containers/MessegesList";
import { AddMessage } from "./containers/AddMessage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <MessegesList />
          <AddMessage/>
        </section>
      </div>
    );
  }
}

export default App;
