import React from 'react';

export default class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }
    static defaultProps = {
        bulletInChamber: 8
    };
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        const rngChamber = Math.ceil(Math.random() * 8)
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: rngChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }
    handleDisplay() {
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
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                <button
                    onClick = {this.handleClick}
                >
                    Pull the trigger!
                </button>
                <p>{this.handleDisplay()}</p>
            </div>
        );
    }
}