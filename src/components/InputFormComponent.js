import React, { Component } from "react";
import "./forms.css";
export default class InputFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      convertedToRoman: ""
    };
  }
  // componentDidMount() {
  //   numberToRomanConvertor(55);
  // }
  numberToRomanConvertor = number => {
    let romanNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = "";
    for (let key in romanNum) {
      while (number >= romanNum[key]) {
        roman += key;
        console.log("roman:", roman);
        number -= romanNum[key];
      }
    }

    this.setState({
      convertedToRoman: roman
    });
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    switch (this.props.indexOfForm) {
      case "1":
        this.props.function(e.target.value, "form1Number");
        break;
      case "2":
        this.props.function(e.target.value, "form2Number");
        break;
    }
  };

  onClickHandler = () => {
    this.numberToRomanConvertor(this.state.number);
  };

  render() {
    return (
      <div>
        <input name="number" onChange={this.onChangeHandler} className="inputbar"/>
        <button onClick={this.onClickHandler} className="btn">convert</button>
        <label className="inputbar">{this.state.convertedToRoman}</label>
      </div>
    );
  }
}
