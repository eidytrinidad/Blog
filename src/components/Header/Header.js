import React from 'react'
import { Link } from 'react-router-dom';

import Nav from './Nav';
import LogoSocials from './LogoSocials';
import Banner from './Banner';

function Header() {
    return (
        <header >
            <div className="container">

                <LogoSocials/>
                <Nav />
                <Banner/>
            </div>
        </header>
    )
}

export default Header
