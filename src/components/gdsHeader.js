import React from 'react';
import logo from '../images/logo.svg';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        );
    }

}

export default Header;