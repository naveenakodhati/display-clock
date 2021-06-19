import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClicked: true}

  displayClock = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const buttonText = isClicked ? 'Show Clock' : 'Hide Clock'
    return (
      <div className="app-container">
        <button
          onClick={this.displayClock}
          type="button"
          className="toggle-button"
        >
          {buttonText}
        </button>
        {!isClicked && <Clock />}
      </div>
    )
  }
}

export default App
