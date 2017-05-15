import React from 'react'

function StudentList(props) {
  const nameEls = props.students.map( name =>  React.createElement('li', {}, name) )

  return React.createElement('ul', {}, nameEls)
}

export default StudentList
