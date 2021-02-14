import React, { Component } from 'react';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Table from "./components/Table"
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <Table/>
      </div>
    );
  }
}

export default App;