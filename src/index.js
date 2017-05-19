import React from 'react'
import ReactDOM from 'react-dom'

import StudentsContainer from './containers/StudentsContainer'
import DogsContainer from './containers/DogsContainer'


ReactDOM.render((
  <div>
    < StudentsContainer />
    < DogsContainer />
  </div>
), document.getElementById('container'))
