import "./App.css";
import React, { Component } from "react";


import CardContainer from "./Components/CardContainer/CardContainer";
import SearchBox from "./Components/SearchBox/Search";

// import "./Components/SearchBox.style.css"
// //import "./Components/CardContainer.style.css"
// // import "./Components/Card.style.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };

    this.onSearchEvent = this.onSearchEvent.bind(this);
    console.log("in constructor");
  }

  // sotres data from API to state
  async componentDidMount() {
    console.log("compDidMount");

    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let monsters = await res.json();

    this.setState(
      () => {
        return { monsters };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  //onChange callback for Search input
  onSearchEvent(e) {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  }

  //1. intermediate vaiable filteredMonsters have state copy
  //2. call state if there is an change of EVENT VALUE of "input tag"
  //3. filteredMonster is rendered
  render() {
    console.log("in render");

    const filteredMonsters = this.state.monsters.filter((m) => {
      return m.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase());
    });

    return (
      <div className="App">

        <h1 className="app-title"> Monsters Rolodex</h1>
        
        <SearchBox
          className='SearchBox'
          searchValue={this.onSearchEvent}
          placeholder="Search Monsters2"
        ></SearchBox>

        <CardContainer className="Card" monsters={filteredMonsters}> </CardContainer>

       
      </div>
    );
  }
}

export default App;









//  1. store from API to state

//render state through intermediate var

