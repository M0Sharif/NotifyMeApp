var Link = require('react-router').Link
var React = require("react");
var UserStore = require('../stores/userStore.js');
var BrowserHistory = require("react-router/lib/browserHistory");

var loginButton;
var registerButton;

var Nav = React.createClass({
  render: function() {
	if (sessionStorage.getItem('myKey') !== "logged in") {
  		loginButton = <li><Link to="/login">Login</Link></li>
   
	} else {
  		loginButton = <li><Link to="/logout">Logout</Link></li>
  	}
    return (
	  <nav className="teal lighten-2">
	    <div className="container teal lighten-2">
	      		<Link href="/" className="brand-logo">Mogur</Link>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	      		{loginButton}
	      </ul>
	    </div>
	  </nav>
    )
  }
})

module.exports = Nav;
