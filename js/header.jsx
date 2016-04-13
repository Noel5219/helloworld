var React = require('react');

var HeaderTitle = React.createClass({
  getInitialState: function() {
  return {
      test: 1     
    };
  },
  click: function(){
    this.setState({
      test: 3
    });
    console.log(this.state.test);
  },
  render: function() {
    return (
      <div className="headerTitle">
        <sanp onClick={this.click}>{this.state.test}</sanp>
      </div>
    );
  }
});

module.exports = HeaderTitle;
