import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="messages-list">Messeges List</section>
          <section id="new-message" >New Message</section>
        </section>
      </div>
    );
  }
}

export default App;
