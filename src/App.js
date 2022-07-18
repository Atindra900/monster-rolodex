//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };

    this.counter = {
      num: 0,
    };

    this.search = this.search.bind(this);

    this.stateCopy = Object.assign({}, this.state);
  }

  componentDidMount() {
    console.log("compDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        let newAr1 = json.slice();
        console.log(json);
        this.setState(
          () => {
            return { monster: newAr1 };
          },
          () => {
            this.stateCopy = Object.assign({}, this.state);
          }
        );
      });
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search Name"
          id="search-bar"
          onChange={this.search}
        />

        {this.state.monster.map((m) => {
          return <h1 key={m.id}>{m.name}</h1>;
        })}
      </div>
    );
  }

  search(e) {

    // intial state to work with 
    let array1 = [...this.stateCopy.monster];
    
    //main functionality - filter
    let array2 = array1.filter(
      (m) => m.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    console.log(array2);


    //update state as per the new data array
     this.setState({ monster: array2 });

  
  
}
}

export default App;

//-----------part 1--------------------------------------------------------------------------------------------------

// crate class element
// give state with array property for map to work

//use map in render to give multiple elements

//--------------2nd part-------------------------------------------------------------------------------------------------

//componentDidMount() -> fetch and store data with the help of API.
// data from object to array storage
//also make a copy of state when state updates - this copy is used to take out desired array ; Note - its value is never alterred

//------------------3rd part--------------------------------------------------------------------------------


//when a letter is typed
//onchange should trigger
//onchange event obj value is used to filter an state
// 


//input field -> onChange, filter usage , e.target.value

//array fn used
//-slice
//-push
//-includes

//---------------------------------  Codes  ------------------------------------------------------------

// ::::::::::::::::::::::::::::::::  Part 1  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// class App extends Component {

//   constructor(){
//     super();
//     this.state ={
//       monster : [
//         'ravi',
//         'Ati',
//         'kavi'
//       ]
//     }
//     console.log(this.state.monster.map((m)=>console.log(m)));
//   }

//   render() {
//     return (

//       <div>
//         <input type='search' placeholder='Search Name'id='search-bar'/>

//        { this.state.monster.map((m)=>{
//        return <h1 key>{m}</h1>
//               })}

//       </div>
//     )
//   }
// }
