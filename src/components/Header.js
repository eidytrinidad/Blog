import React from 'react'
import {Link} from 'react-router-dom';
import logo from './img/logo.png'

function Header() {
    return (
        <header >
            <div className="container">
                <div className="row">
                    <div className="logo col-xs-12 col-sm-6">
                        <Link to="/"><img src={logo} alt="Logo"/></Link>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
