import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import AddFriend from './friendComponents/AddFriend'
import { db } from '../server/firebase'

function Navbar() {
    const { currentUser, logOut } = useAuth()

    const [friendRequestCheck, setRequestCheck] = useState()

    const addFriend = document.querySelector('.popup-screen')

    function handleLogout(){
        logOut()
    }

    function handleFriendOpen(){
        addFriend.style.display= 'block'
    }
    
    useEffect(() => {
        const unsub = db.collection('users').doc(currentUser.uid)
        .onSnapshot(function (doc){
            const requestCheck = doc.data().friendRequests;
            if(requestCheck === true){
                setRequestCheck(requestCheck)
                console.log(friendRequestCheck)
            }
            
            
            return unsub
        })
        
        
    }, [])

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
                        <li><NavLink to="/">Hjem</NavLink></li>
                        <li><a className="addFriend" onClick={handleFriendOpen}>Legg til venn</a></li>
                        { friendRequestCheck && <li><a className="friendRequest">!</a></li> }
                        <button className="btn" onClick={handleLogout}>Logg ut</button>
                    </ul>
                </nav>
            </div>
            <AddFriend />
    </div>
     )
 }
}


export default withRouter(Navbar)
