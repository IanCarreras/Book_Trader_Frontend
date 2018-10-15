import React, { Component } from 'react'


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.props.auth.login();
  }

  handleLogout() {
    this.props.auth.logout();
  }

  render() {
    const { auth, actions } = this.props
    return (
      <div className="navbar">
        {auth.isLoggedIn && <button className="create-poll-button" onClick={actions.addBook}>Add a new book</button>}

        {auth.isLoggedIn
        ?
          <button className="log-button" onClick={this.handleLogout}>Logout</button>
        :
          <button className="log-button" onClick={this.handleLogin}>Login</button>
        }
      </div>
    );
  }
}

export default NavBar;
