var React = require('react');

var ModelFrame = React.createClass({
  handleModelChange: function() {
    var model = document.getElementsByName("model")[0].checked ? 'game' : 'input';
    this.props.handleModelChange(model);
  },
  render: function() {
    return (
      <div className="modelFrame">
        <fieldset className="inModel">
          <legend className="modelTitle">{this.props.myLang.ModelSelect}</legend>

          <input type="radio" name="model" value="game" className="rdMode" id="rdGame" onClick={this.handleModelChange}/>
          <samp>{this.props.myLang.Game}</samp>

          <br />
          
          <input type="radio" name="model" value="input" className="rdMode" id="rdInput" defaultChecked onClick={this.handleModelChange}/>
          <samp>{this.props.myLang.Input}</samp>
          
          

        </fieldset>
      </div>
    );
  }
});

module.exports = ModelFrame;