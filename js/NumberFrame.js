var React = require('react');

/** 建立九宮格 */
var NumberFrame = React.createClass({
  getInitialState: function() {
    return {
       randArr: [],
       checkedBox: [], 
       countLineArray: [],
       line: 0
    };
  },
  clickBox: function(numbox, numArray) {
    if(this.props.model === "input"){
      this.inputNumBox();
    }else{
      this.inGame(numbox, numArray);
    }
  },
  inputNumBox: function(){
    var inputNum = parseInt(prompt(this.props.myLang.ErrorInt), 10);
    var curClickNum = parseInt(document.getElementById(event.target.id).innerHTML, 10);

    if(isNaN(inputNum) || inputNum < 1){
      alert(this.props.myLang.ErrorInt);
    }else if(this.props.randArr.indexOf(inputNum, 0) !== -1){
      alert(this.props.myLang.ErrorRepeat);
    }else{
      // 檢查無誤將數字放入randArr[]
      this.props.randArr.splice(this.props.randArr.indexOf(curClickNum, 0),1 ,inputNum);
      this.props.handleRandomChange(this.props.randArr);
    }
  },
  inGame:function(numbox, numArray){

    if(this.state.checkedBox.indexOf(event.target.id, 0) === -1){
      this.state.checkedBox.push(event.target.id);
      document.getElementById(event.target.id).style.background = "#FF9F64";
    }else{
      this.state.checkedBox.splice(this.state.checkedBox.indexOf(event.target.id, 0), 1);
      document.getElementById(event.target.id).style.background = "#FFFFFF";
    }
    console.log(this.state.checkedBox);

    // 判斷連線數
    this.lineDetermine(numbox, numArray);

    this.setState({
      line: this.state.countLineArray.length
    });

    console.log(this.state.line);
  },
  lineDetermine: function(numbox, numArray){
    this.rowLine(numbox, numArray);
    this.columnLine(numbox, numArray);
    this.diagon1(numbox, numArray);
    this.diagon2(numbox, numArray);
    
    
  },
  rowLine: function(numbox, numArray){
    var xyzCount = 0;
    var row = parseInt(numbox.indexOf(event.target.id, 0) % this.props.maxNum, 10);

    for(var i = 0; i < this.props.maxNum; i++){
      if(this.state.checkedBox.indexOf(numArray[i][row], 0) !== -1){
        xyzCount++;
      }
      this.lineFail("row", row, xyzCount);
    }
    this.lineOk("row",row, xyzCount);
  },
  columnLine: function(numbox, numArray){
    var xyzCount = 0;
    var column = parseInt(numbox.indexOf(event.target.id, 0) / this.props.maxNum, 10);

    for(var i = 0; i < this.props.maxNum; i++){
      if(this.state.checkedBox.indexOf(numArray[column][i], 0) !== -1){
        xyzCount++;
      }
      this.lineFail("column", column, xyzCount);
    }
    this.lineOk("column",column, xyzCount);
  },
  diagon1: function(numbox, numArray){
    var xyzCount = 0;
    var maxNum = this.props.maxNum * this.props.maxNum;

    for (var k = 0; k < maxNum; k += this.props.maxNum + 1) {
        if ((this.state.checkedBox.indexOf(numbox[k], 0) !== -1)) {
            xyzCount++;
        }
        this.lineFail("z", "1", xyzCount);
    }
    this.lineOk("z", "1", xyzCount);
  },
  diagon2: function(numbox, numArray){
    var xyzCount = 0;
    var maxNum = this.props.maxNum * this.props.maxNum;

    for (var k = this.props.maxNum - 1; k < maxNum - 1; k += this.props.maxNum - 1) {
        if ((this.state.checkedBox.indexOf(numbox[k], 0) !== -1)) {
            xyzCount++;
        }
        this.lineFail("z", "2", xyzCount);
    }
    this.lineOk("z", "2", xyzCount);
  },
  lineOk: function(i, j, xyzCount) {
    // i 為軸向,j 為點選的行或列
    var countLineArray;
    if ((xyzCount >= this.props.maxNum) && (this.state.countLineArray.indexOf(i + j, 0) === -1)) {
      this.state.countLineArray.push(i + j);
    }
  },
  lineFail: function(i, j, xyzCount) {
    // i 為軸向,j 為點選的行或列
    if (xyzCount <this.props.maxNum && this.state.countLineArray.indexOf(i + j, 0) !== -1) {
      this.state.countLineArray.splice(this.state.countLineArray.indexOf(i + j), 1);
    }
  },
    handleClear: function(maxNum){

      this.setState({
        checkedBox: [], 
        line: 0
      });

    for(var i = 1; i <= maxNum; i++){
      document.getElementById("box"+i).style.background = "#FFFFFF";
    }
  },
  render: function() {
    var minNum = this.props.minNum;
    var boxNum = this.props.maxNum;
    var maxNum = this.props.maxNum * this.props.maxNum;
    var width = Math.floor(90 / boxNum); // box width
    var numIndex = 1; 
    var boxs = [];
    var lineOk = [];
    var numArray = [];
    var numbox = [];

    var self = this;
    var props = this.props;
    var state = this.state;

    /** 建立九宮格－迴圈 */
    for (var i = 0; i < boxNum; i++) {
      numArray[i] = [];
      for (var j = 0; j < boxNum; j++) {
        boxs.push(i * j + 1);
        numbox.push("box" + numIndex);
        numArray[i][j] = "box" + numIndex;
        numIndex ++;
      };
    };

    return (       
      <div className="numberFrame" id="numFrame">
        <div onClick={this.clickBox.bind(this, numbox, numArray)}>
        {
          boxs.map(function(o, i ){
            var idBox = i + 1;
            return(
              <div 
                key={i} 
                style={{width: width + "%", background : "#FFFFFF"}} 
                className="numberBox" 
                id={"box" + idBox}
              >
                {props.randArr[i]}
              </div>
            );
          })
        }
        </div>
        <div className="sidebarFrame">
          <p className="txtLine">{this.props.myLang.Line}</p>
          <p id="conutLine" />{this.state.line}<p />
        </div>
        <div>
            <button id="btnClear" onClick={this.handleClear.bind(this, maxNum)}>{this.props.myLang.Clear}</button>          
        </div>
      </div>
    );
  }
});


module.exports = NumberFrame;
