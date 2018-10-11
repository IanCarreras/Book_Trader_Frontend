import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'

import './App.css'


class App extends Component {

  componentWillMount(){
    const { actions } = this.props
    actions.getBooks()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">Book Trading Club</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
