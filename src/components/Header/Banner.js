import React from 'react'
import add from '../img/ad.jpg'


function Banner() {
    return (
        <div className="ad container hidden-xs">
            <div className="row">
                <div className="col-md-12">
                    <img src={add} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Banner
