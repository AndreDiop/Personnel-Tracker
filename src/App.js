import React, { Component } from 'react';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;