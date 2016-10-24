var React = require('react');
var Dispatcher = require('../dispatchers/appDispatcher.js');
var UserStore = require('../stores/userStore.js');
var browserHistory = require("react-router/lib/browserHistory");
var Link = require('react-router').Link

var Login = React.createClass({
  getInitialState: function() {
    return {
      logged: UserStore.getLoggedIn()
    }
  },
  componentDidMount: function() {
    UserStore.on("loggedIn", function() {
      this.setState({
        logged: UserStore.getLoggedIn()
      })
      browserHistory.push("/");
    }.bind(this))
  },
  handleLogin: function(){
      // console.log(this.refs.username.value);
      Dispatcher.dispatch({
        action: "LOGIN",
        username: this.refs.username.value,
        password: this.refs.password.value
      });
  },
  render: function() {
    return (
			<div className="container">
				<form className="form-signin">       
 					<h2 className="form-signin-heading">Please login</h2>
  					<input type="text" className="form-control" name="username" ref="username" placeholder="Enter Username" />
  					<input type="password" className="form-control" name="password" ref="password" placeholder="Enter Password" /> 
  					<div>
              <button type="button" className="btn btn-primary btn-cons login white-text" onClick={this.handleLogin}>Login</button>
              <button type="button" className="btn btn-primary btn-cons register"><Link className="white-text" to="/register">Register</Link></button>
            </div>
				</form>
			</div> 	
    )
  }
});
module.exports = Login;