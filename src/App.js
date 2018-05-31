import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Container from './container/index'
import Loggin from './components/loggin/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultStatus: true
      }
    }

  getDefaultStatus = (status) => {
    this.setState({defaultStatus: status})
  }

  render() {
    return (
      <div>
           <Container />
      </div>
    )
  }
}

export default App

//РАСКОМИТИТЬ
// return (
//   <div>
//      {this.state.defaultStatus
//        ?
//        <Loggin getDefaultStatus={this.getDefaultStatus} status={this.state.defaultStatus}/>
//        :
//        <Container />
//      }
//   </div>
// )
