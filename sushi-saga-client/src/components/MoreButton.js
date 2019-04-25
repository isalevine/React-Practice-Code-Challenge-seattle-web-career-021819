import React from 'react'

const MoreButton = (props) => {

    function handleClick() {
      props.loadSushi()
    }

    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton
