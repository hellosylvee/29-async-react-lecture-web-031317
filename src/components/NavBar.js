import React from 'react'

function NavBar(props){
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }
  colors['black']
  return (
    <nav className={`navbar ${colors[props.color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  )

  // return React.createElement('nav', {className:  },
  //   React.createElement('div', {className: 'container-fluid' }), React.createElement('div', {className: 'navbar-header'}, React.createElement('a', {className: 'navbar-brand'}, props.title)))
}

export default NavBar
