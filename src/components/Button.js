import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ bgColor, textColor, text, onClick }) => {
  return (
    <button onClick={onClick} style={{backgroundColor: bgColor, color: textColor}} className='btn'>
      {text}
    </button>
  )
}

Button.defaultProps = {
    bgColor: 'black',
    textColor: 'white'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
