import React, { Component } from 'react'

export default class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
    }

    handleWorld = () => {
        this.setState({ who: 'world'})
    }
    handleFriend = () => {
        this.setState({ who: 'friend'})
    }
    handleReact = () => {
        this.setState({ who: 'react'})
    }


    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleWorld}>World</button>
                <button onClick={this.handleFriend}>Friend</button>
                <button onClick={this.handleReact}>React</button>
            </div>
        )
    }
}
