var React = require('react');

var ChangeFrame = React.createClass({
  getInitialState: function() {
  return {
       maxNum:3,
       randArr: []
    };
  },
  shouldComponentUpdate: function (nextProp) {   
    // 當格子數變更時，改變亂數最大值
    this.state.maxNum = nextProp.maxNum;
    return true;  
  },
  handleRandom: function(curMaxNum){
    
    if(this.props.model === "input"){
      // 清空randArr
      this.state.randArr = [];

      for(var i = 0; this.state.randArr.length < curMaxNum; i++){
        this.randNum(curMaxNum);
      }
      this.props.handleRandomChange(this.state.randArr);
    }else{
      alert(this.props.myLang.ErrorChange);
    }
  },
  randNum:function(curMaxNum){
    var rand = Math.floor(Math.random() * 100 % ((curMaxNum - this.props.minNum) + 1) + this.props.minNum);
    
    if (this.state.randArr.indexOf(rand, 0) === -1) {
      this.state.randArr.push(rand);
    }
  },
  render: function() {
    var curMaxNum = this.state.maxNum * this.state.maxNum;

    return (
    <div className="changeFrame">
      <fieldset className="inChange">
        <legend className="modelTitle">{this.props.myLang.InputModel}</legend>
        <samp>{this.props.myLang.EnterNum}</samp>
        <spam id="minNumber">{this.props.minNum}</spam> ～
        <spam id="maxNumber">{curMaxNum}</spam>
        <button id="btnRandomNum" onClick={this.handleRandom.bind(this, curMaxNum)}>{this.props.myLang.Random}</button>
        </fieldset>
    </div>
    );
  }
});

module.exports = ChangeFrame;