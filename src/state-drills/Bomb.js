import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('Component Mounted')
        this.interval = setInterval(() => {
            console.log('Interval Set')
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
        let count = this.state.count;
    }
    componentWillUnmount() {
        console.log('Component Unmounted')
        clearInterval(this.interval)
    }


    render() {
        let display;
        if (this.state.count % 2 === 0 && this.state.count < 8) {
            display = 'tick';
        } else if (this.state.count % 2 !== 0 && this.state.count < 8) {
            display = 'tock';
        } else if (this.state.count >= 8) {
            display = 'BOOM!!!';
        }
        console.log(this.state.count)
        console.log('render')
        return (
            <div>
                <p>{display}</p>
            </div>
        )
    }
}
