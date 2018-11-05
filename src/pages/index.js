import React, { Component } from "react"
import Layout from "../components/layout";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class TimerCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: new Date("2018-10-29T7:30:00+01:00"),
            endTime: new Date("2018-10-29T15:30:00+01:00"),
            percentage: this.getTimePercentage(new Date("2015-03-25T7:30:00+01:00"), new Date("2018-10-29T15:00:00+01:00"))
        }
    }

    componentDidMount() {
        var that = this;
        this.interval = setInterval(function() {
            that.setState({percentage: that.getTimePercentage(that.state.startTime, that.state.endTime)})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTimePercentage = function(startTime, endTime, currentTime = new Date()) {
        const getTimeInSeconds = time => time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
        let startTimeSeconds = getTimeInSeconds(startTime);
        let endTimeSeconds = getTimeInSeconds(endTime);
        let currentTimeSeconds = getTimeInSeconds(currentTime);
        let elapsedTime = currentTimeSeconds - startTimeSeconds;
        let totalTime = endTimeSeconds - startTimeSeconds;
        return elapsedTime / totalTime * 100;
    }

    render() {
        return (<CircularProgressbar percentage={this.state.percentage} text={`${this.state.percentage.toFixed(2)}%`} strokeWidth="5" strokeColor={this.state.percentage < 100 ? "#00FF00" : "#FF0000"} trailWidth="5"/>)
    }
}

export default () => (
<Layout>
    <TimerCircle />
</Layout>)