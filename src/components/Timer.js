import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { toggle } from "../action/Action";
import { connect } from "react-redux";

var moment = require("moment");

class Timer extends Component {
  state = {
    toggle: "START",
    timerId: null
  };

  changeTime = () => {
    let Id;

    if (this.state.toggle === "START") {
      setTimeout(() => {
        this.setState({ toggle: "STOP" });
      }, 1000);
      Id = setInterval(() => {
        this.props.toggle("START");
      }, 1000);

      this.setState({
        timerId: Id
      });
    } else {
      this.setState({
        toggle: "START"
      });
      clearInterval(this.state.timerId);
    }
  };
  // secondsToHms = d => {
  //   d = Number(d);
  //   //console.log(d);
  //   var h = 0,
  //     m = 0,
  //     s = 0;
  //   h = Math.floor(d / 3600);
  //   m = Math.floor((d % 3600) / 60);
  //   s = Math.floor((d % 3600) % 60);

  //   var hDisplay = h > 0 ? h + (h === 1 ? " Hr : " : " Hr: ") : "";
  //   var mDisplay = m > 0 ? m + (m === 1 ? " Min : " : " Min: ") : "";
  //   var sDisplay = s > 0 ? s + (s === 1 ? " Sec" : " Sec") : "";
  //   return hDisplay + mDisplay + sDisplay;
  // };

  formatX = x => {
    return moment(x).format("HH:mm:ss");
  };

  render() {
    //let timeX = this.secondsToHms(this.props.time);
    let timeX = this.formatX(this.props.time);
    return (
      <div>
        <button onClick={this.changeTime}>{this.state.toggle}</button>
        <p>Timer : {timeX}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.time,
    mode: state.toggle
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggle }, dispatch);

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newComponent = hoc(Timer);

export default newComponent;
