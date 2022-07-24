import React, { Component } from "react";

import "./SearchBox.style.css"

class SearchBox extends Component {


  render() {
    
    return (
      <div>
        <input
          className="SearchBox"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.searchValue}
        />
      </div>
    );
  }



}

export default SearchBox;
