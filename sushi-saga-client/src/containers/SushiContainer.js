import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi, index) => {
            return <Sushi
              key={sushi.id}
              id={sushi.id}
              price={sushi.price}
              sushi={sushi}
              buySushi={props.buySushi}
              boughtSushi={props.boughtSushi}
              checkMoney={props.checkMoney}
            />
          })
        }
        <MoreButton loadSushi={props.loadSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
