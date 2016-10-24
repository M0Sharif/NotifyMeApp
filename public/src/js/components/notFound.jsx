var React = require("react");
// <p>{this.props.count}</p>

var NotFound = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<h1>404.. This page is not found!</h1>
    	</div>
    )
  }
})

module.exports = NotFound;
