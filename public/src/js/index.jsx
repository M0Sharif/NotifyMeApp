var React = require("react");
var ReactDOM = require("react-dom");

// var Counter = require("./components/ting.jsx");
// var Button = require("./components/example.jsx");
var Login = require("./components/login.jsx");
// var Home = require('./components/home.jsx');

var Register = require('./components/register.jsx');
var Home = require('./components/Home.jsx');
var Container = require('./components/container.jsx');
var Logout = require('./components/logout.jsx');

var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router/lib/IndexRoute');

var Nav = require('./components/nav.jsx');
var NotFound = require('./components/notFound.jsx');

//var AppStore = require("./stores/appStore.js");
var browserHistory = require("react-router/lib/browserHistory");
var hashHistory = require('react-router/lib/hashHistory');

require('../css/style.css');

var App = React.createClass({
  // getInitialState: function() {
  //   return {
  //     count: AppStore.getCount()
  //   }
  // },
  // componentDidMount: function() {
  //   AppStore.on("tang", function() {
  //     console.log("tang")
  //     this.setState({
  //       count: AppStore.getCount()
  //     })
  //   }.bind(this))
  // },
  render: function() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout}/>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    )
  }
});

// <IndexRoute component={Home}/>
// <Route path="/" component={Home}/>

//<Route path="/" component={Home}/>
//<Route path="login" component={Login}/>
//<Route path="register" component={Register} />
//<Router history={hashHistory}>
  //        <Route path='/' component={Home} />
    //      <Route path='/login' component={Login} />
      //    <Route path='*' component={NotFound}/>
        //</Router>

ReactDOM.render(<App />, document.getElementById('app'));
