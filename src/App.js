import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import axios from "axios";
class App extends Component {
  state = {
    users: "",
  };

  componentDidMount() {
    this.getRandomUser();
    console.log("Bro we made it");
  }

  getRandomUser() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then(function (response) {
        console.log(response.data.results);
        this.setState({ users: response.data.results });
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default App;
