import React from 'react'
// add a button to this component that resets the list to be empty
import NavBar from './NavBar'
import StudentList from './StudentList'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      names: ["Usman", "Scott", "Meryl", "Liz", "Alex", "Darth Vader", "Sammy", "Sarah"]
    }
  }

  handleAddDog(){
    this.setState({names: [...this.state.names, "Fido"]})
  }

  render(){
    return (
      <div>
          < NavBar color='black' title={`Listing out ${this.state.names.length} students`} />
          < StudentList students={this.state.names} />
          <button onClick={this.handleAddDog.bind(this)}>Add Dog!</button>
      </div>
    )
  }
}

export default App
