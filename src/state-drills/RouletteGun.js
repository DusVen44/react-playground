import React, { Component } from 'react'

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    getRandomBullet = () => {
        let randomBullet = Math.ceil(Math.random() * 8);
        this.setState({ chamber: randomBullet });
        };

    handleButton = () => {
        this.setState({ spinningTheChamber: true });
        setTimeout(() => {
            this.setState({ spinningTheChamber: false });
        }, 2000)
        this.getRandomBullet()
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }


    render() {
        return (
            <div>
                <p>{ this.renderDisplay() }</p>
                <button onClick={this.handleButton}>Pull the trigger!</button>
            </div>
        )
    }
}
