var React = require('react');
var ReactDom = require('react-dom');
require('../css/style.css');

var AppComponent = require('./AppComponent.jsx');
// require('./main.scss');

ReactDom.render(<AppComponent />, document.getElementById('container'));