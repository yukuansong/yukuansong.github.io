import React from 'react'

import './App.css';
import Table from './Table'
import Form from './Form'

class App extends React.Component {
  state = {
    characters: []
  }

  // remove an element with index "index"
  removeCharacter = (index) => {
    const characters = this.state.characters
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })

  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const characters=this.state.characters
    return (
      <div className="container" >
        <Table charactersData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
