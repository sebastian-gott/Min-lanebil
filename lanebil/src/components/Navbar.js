import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Navbar() {
    return (
        <div className="content-page">
            <div className="nav-wrapper">
                <nav className="blue">
                    <a href="/" className="brand-logo">MIN LÅNEBIL</a>
                    <ul className="right">
                        <li><NavLink to="/"></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default withRouter(Navbar)
