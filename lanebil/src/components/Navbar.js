import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

function Navbar() {
    const { currentUser, logOut } = useAuth()

    function handleLogout(){
        logOut()
    }

    if(!currentUser){
    return (
        <div className="content-page">
            <div className="nav-wrapper">
                <nav className="blue">
                    <a href="/" className="brand-logo">MIN LÅNEBIL</a>
                    <ul className="right">
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li><NavLink to="/Logginn">Logginn</NavLink></li>
                        <li><NavLink to="/Registrer">Registrer</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
 } else {
     return(
        <div className="content-page">
        <div className="nav-wrapper">
            <nav className="blue">
                <a href="/" className="brand-logo">MIN LÅNEBIL</a>
                <ul className="right">
                    <li><NavLink to="/"></NavLink></li>
                    <button onClick={handleLogout} className="btn">Logg ut</button>
                </ul>
            </nav>
        </div>
    </div>
     )
 }
}


export default withRouter(Navbar)
