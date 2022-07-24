import React, { Component } from 'react'

import "./Card.style.css"

class Card extends Component {
  render() {

    let {name,id,email} = this.props.monster;
    
    
    return (
      
          <div className='Card'>
          <img src={`https://robohash.org/${id}?set=set1`} alt='not avilable'></img>
          <h1 >{name}</h1>
          <h2 >{email}</h2>
          </div>
    )
  }
}

export default Card
