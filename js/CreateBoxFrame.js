var React = require('react');

var CreateBoxFrame = React.createClass({
  getInitialState: function() {
  return {      
       randArr: []
    };
  },
  changeBox:function(event){
    var num = parseInt(event.target.value, 10);
    if(isNaN(num) || num < 3 || num > 6){
      event.target.value = 3;
      alert(this.props.myLang.ErrorMoreThen);
    }else{
      var curCountNum = num * num;
      this.state.randArr = [];

      for(var i = 1; i <= curCountNum; i++){
        this.state.randArr.push(i);
      }
      this.props.handleBoxChange(event.target.value);
      this.props.handleRandomChange(this.state.randArr);
    }
    
    
  },
  render: function() {
    return (
      <div className="creatBoxFrame">
        <samp>{this.props.myLang.Create}</samp>
        <input type="text" id="addBoxNum" ref="addBoxNum" value={this.props.countBox} onChange={this.changeBox}/>
        <samp> X {this.props.countBox} </samp>
        <samp>{this.props.myLang.Box}</samp>
      </div>
    );
  }
});

module.exports = CreateBoxFrame;
