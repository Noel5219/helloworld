var React = require('react');
var style = require('../css/style.css');

// var CreateBoxFrame = require('./CreateBoxFrame');
var AllView = React.createClass({
  getInitialState: function() {
    return {
      // 初始化設定
    };
  },
  render: function() {
    return (
      <div className="allView">
      </div>

    );
  }
});

React.render(<AllView />, document.getElementById("allView"));
