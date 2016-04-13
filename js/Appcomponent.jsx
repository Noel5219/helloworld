var React = require('react');
var HeaderTitle = require('./header.jsx');
var AppComponent = React.createClass({
  render: function() {
    return (
      <div>
      	<h1>Hello world!</h1>
      	<HeaderTitle />
      </div>
    );
  }
});
module.exports = AppComponent;