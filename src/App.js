import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'

import Navbar from './components/navbar'
import './App.css'


class App extends Component {

  componentWillMount(){
    const { actions } = this.props
    actions.getBooks()
  }

  render() {
    const { auth, actions } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Navbar auth={auth} actions={actions}/>
          <p className="App-title">Book Trading Club</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ books, auth }) => {
  return {
    books,
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
