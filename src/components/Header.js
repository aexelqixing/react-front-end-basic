import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>COMMUNITY SERVICE PORTAL FOR {title.toUpperCase()}</h1>
      <Button bgColor={showAdd ? '#9b2226' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
    </header>
  )
}

Header.defaultProps = {
    title: 'User',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
