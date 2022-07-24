import React, { Component } from 'react'

import Card from '../Card/Card';

import "./CardContainer.style.css"



 class CardContainer extends Component {
  render() {
    let filteredMonsters = this.props.monsters;
    return (
      <div className='CardContainer'>
        {
          filteredMonsters.map((m)=>{
            return <Card className="card" key={m.id} monster={m}></Card>
          })
        
        }
      </div>
    )
  }
}

export default CardContainer
