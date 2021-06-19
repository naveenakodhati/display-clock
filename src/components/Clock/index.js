import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('Constructor Called')
  }

  componentDidMount() {
    console.log('ComponentDidMount Called')
    this.timerID = setInterval(this.setTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  setTimer = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('Render called', date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
