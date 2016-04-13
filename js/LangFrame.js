var React = require('react');
var langs = require('./lang');

var LangFrame = React.createClass({
  
handleChange: function() {
  var curLang = this.refs.lang.value;
  var myLang = curLang == "zhText" ? langs.zhText : langs.enText;
  this.props.handleLangChange(myLang);
},
componentDidMount: function(){
  this.props.handleLangChange(langs.zhText);
},
render: function() {

    return (
    <div className="langFrame"> 
      <select id="lang" ref="lang" value={this.props.selected} defaultValue="zhText" onChange={this.handleChange}>
        <option value="zhText">繁體中文</option>
        <option value="enText">English</option>
      </select>
    </div>
    );
  }
});

module.exports = LangFrame;
