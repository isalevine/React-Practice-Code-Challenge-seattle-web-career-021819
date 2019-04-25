import React, { Fragment } from 'react'

const Sushi = (props) => {

  function handleClick(ev) {
    if (props.checkMoney(props.price)) {
      console.log("props.id", props.id)
      console.log("props.price", props.price)
      props.buySushi(props.id, props.price)
      let img = ev.target.parentNode.getElementsByTagName('img')[0]
      if (img) {
        ev.target.parentNode.getElementsByTagName('img')[0].remove()
      }
    } else {
      console.log("Not enough money!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={handleClick}>
        {
          /* Tell me if this sushi has been eaten! */
          /* (ostensibly, no check needed...?) */
          <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}



export default Sushi
