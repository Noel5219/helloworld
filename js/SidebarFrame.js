var React = require('react');

var SidebarFrame = React.createClass({
  render: function() {
    return (
      <div className="sidebarFrameL">
        <p className="txtLine">{this.props.myLang.Line}
        </p>{this.props.line}<p id="conutLine" />
        <p />
      </div>
    );
  }
});


module.exports = SidebarFrame;

