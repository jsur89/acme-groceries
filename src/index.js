import React, { Component } from "react";
import { render } from "react-dom";
import store from "./store";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: store.getState().groceries,
    };
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        groceries: store.getState().groceries,
      });
    });
  }

  render() {
    return (
    
    <h1>Acme Groceries</h1>
    <ul> 

    </ul>


    );
  }
}

render(<App />, document.querySelector("#root"));
