var React = require('react');
var Dispatcher = require('../dispatchers/appDispatcher.js');
var UserStore = require('../stores/userStore.js');
var browserHistory = require("react-router/lib/browserHistory");

var Logout = React.createClass({
  componentWillMount: function(){
    this.handleGetLogout();
  },
  handleGetLogout: function(){
      Dispatcher.dispatch({
        action: "GETLOGOUT"
      });
  },
  render: function() {
    return (
      <div className="container">
        Logout!
      </div>
    )
  }
});
module.exports = Logout;