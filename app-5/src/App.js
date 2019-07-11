import React, { Component } from 'react'
import Image from './components/Image'
import './App.css'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      url: 'https://http.cat/599'
    }
  }
  
  render() {
    return (
      <div className="App">
        <Image />
      </div>
    )
  }
}

export default App
