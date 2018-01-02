import React, { Component } from 'react';
class Header extends Component {

    render () {
        return (
            <nav className="navbar navbar-blu">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="presentation"><a href="/">GaM</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="presentation"><a href="/">About GaM</a></li>
                            <li className="user">
                                <a href="#contact">
                                    <img className="userAvatar" alt="Maurizio BLASILLI" src={process.env.PUBLIC_URL + "/assets/img/maurizio.blasilli@wfp.org.jpg"}/>
                                    Hello, Maurizio!
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
      }
}    

export default Header;