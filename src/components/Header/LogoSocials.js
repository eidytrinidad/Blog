import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

function LogoSocials() {
    return (
        <div className="row">
            <div className="logo col-xs-12 col-sm-6">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="redes-sociales col-xs-12 col-sm-6">
                <a className="youtube" href="#/"><i className="fa fa-youtube-play"></i></a>
                <a className="twitter" href="#/"><i className="fa fa-twitter"></i></a>
                <a className="facebook" href="#/"><i className="fa fa-facebook"></i></a>
            </div>
        </div>
    )
}

export default LogoSocials
