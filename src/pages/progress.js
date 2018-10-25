import React, { Component } from "react"
import Layout from "../components/layout";
import { Circle } from 'rc-progress';

export default () => {
    let startTime = 9 * 60 * 60;
    let endTime = 17 * 60 * 60;
    return (
    <Layout>
        <TimerCircle startTime={startTime} endTime={endTime} />
    </Layout>
    );
};

const getTimePercentage = function(startTime, endTime) {
    let currentTime = new Date();
    let elapsedTime = currentTime.getHours() * 3600 + currentTime.getMinutes() * 60 + currentTime.getSeconds() - startTime;
    let totalTime = endTime - startTime;
    return elapsedTime / totalTime * 100;
}

class TimerCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: getTimePercentage(props.startTime, props.endTime)
        }
    }

    componentDidMount() {
        var that = this;
        this.interval = setInterval(function() {
            that.setState({percentage: getTimePercentage(that.props.startTime, that.props.endTime)})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <Circle percent={this.state.percentage} strokeWidth="5" strokeColor="#00FF00" trailWidth="5"/>
        )
    }
}