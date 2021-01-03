import React from 'react';

import './FirstLevel.scss';

export default class FirstLevel extends React.Component {
    constructor() {
        this.state = {
            x: 1
        }
    }

    componentDidMount() {
        console.log('you did a great job!');
    }

    goodBoy = () => {
        if (this.state.x === 1) {
            console.log('bybe le ning');
        }
    }

    render() {
        return <div className="first-level test">She is a genuine person and the food is authentic Sichuan cuisine, and the process is legitimate!</div>
    }
}
