var React = require('react');
var ReactDom = require('react-dom');
require('../css/style.css');

var AppComponent = require('./AppComponent.jsx');

ReactDom.render(<AppComponent />, document.getElementById('container'));