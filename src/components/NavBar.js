import React from 'react'

function NavBar(props){
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }

  return React.createElement('nav', {className: `navbar ${colors[props.color]}` },
    React.createElement('div', {className: 'container-fluid' }), React.createElement('div', {className: 'navbar-header'}, React.createElement('a', {className: 'navbar-brand'}, props.title)))
}

export default NavBar
