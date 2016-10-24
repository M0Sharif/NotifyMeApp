var React = require('react');
var UserStore = require('../stores/userStore.js');
var Dispatcher = require('../dispatchers/appDispatcher.js');
var browserHistory = require("react-router/lib/browserHistory");

var Register = React.createClass({
  getInitialState: function() {
    return {
      registered: UserStore.getRegistered()
    }
  },
  componentDidMount: function() {
    UserStore.on("registered", function() {
      console.log("success you have registered");
      this.setState({
        registered: UserStore.getRegistered()
      })
    }.bind(this))
  },
  handleRegister: function(e){
  	e.preventDefault();
      // console.log(this.refs.username.value);
      Dispatcher.dispatch({
        action: "REGISTER",
        username: this.refs.username.value,
        password: this.refs.password.value
      });
  },
  render: function() {
    return (
	<div className="container">
		<form className="form-signin">       
			<h2 className="form-signin-heading">Enter username and password</h2>
			<input type="text" className="form-control" name="username" ref="username" placeholder="Enter Username" />
			<input type="password" className="form-control" name="password" ref="password" placeholder="Enter Password"/>      
			<button className="btn btn-primary btn-cons" onClick={this.handleRegister}>Register</button>
		</form>
	</div>
    )
  }
});
module.exports = Register;