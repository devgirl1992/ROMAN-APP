import React, { Component } from "react";
import InputFormComponent from "./InputFormComponent";
import "./forms.css";

export default class Forms extends Component {
  state = {
    form1Number: null,
    form2Number: null,
    sum: ""
  };

  numberToRomanConvertor = () => {
    let numberToAct =
      parseInt(this.state.form1Number) + parseInt(this.state.form2Number);
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
      while (numberToAct >= romanNum[key]) {
        roman += key;
        console.log("roman:", roman);
        numberToAct -= romanNum[key];
      }
    }
    console.log(roman);
    this.setState({
      sum: roman
    });
  };

  render() {
    let setStateFunction = (value, stateNumber) => {
      this.setState({
        [stateNumber]: value
      });
    };

    return (
      <div className="romantask" >
        <InputFormComponent indexOfForm="1" function={setStateFunction} />
        <InputFormComponent indexOfForm="2" function={setStateFunction}  />
        <button onClick={this.numberToRomanConvertor} className="btn">sum</button>
        <label className="sumlable">{this.state.sum}</label>
      </div>
    );
  }
}
