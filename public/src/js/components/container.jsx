var React = require('react');
var Nav = require('./nav.jsx');


var Container = React.createClass({
  render() {
    return (
      <div>
           <Nav />
          {this.props.children}
      </div>
    )
  }
})
module.exports = Container;