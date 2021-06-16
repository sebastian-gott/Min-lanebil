import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import AddFriend from './friendComponents/AddFriend'
import AcceptFriends from './friendComponents/AcceptFriends'
import { db } from '../server/firebase'

function Navbar() {
    const { currentUser, logOut } = useAuth()

    const [friendRequestCheck, setRequestCheck] = useState()
    const [friendComponentDisplay, setFriendComponentDisplay] = useState()
    const [requestComponentDisplay, setRequestComponentDisplay] = useState()


    function handleLogout(){
        logOut()
    }

    function handleFriendOpen(){
        setFriendComponentDisplay(true)
        if(friendComponentDisplay){
            setFriendComponentDisplay(false)
        }
    }

    function handleFriendReqOpen(){
        setRequestComponentDisplay(true)
        if(requestComponentDisplay){
            setRequestComponentDisplay(false)
        }
    }
    
    useEffect(() => {
        if(currentUser){
            const unsub = db.collection('users').doc(currentUser.uid)
            .onSnapshot(function (doc){
                const requestCheck = doc.data().friendRequests;
                if(requestCheck === true){
                    setRequestCheck(requestCheck)
                    console.log(friendRequestCheck)
                }
                
                
                return unsub
            })
        } 
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
                        { friendRequestCheck && <li><a className="friendRequest" onClick={handleFriendReqOpen}>!</a></li> }
                        <button className="btn" onClick={handleLogout}>Logg ut</button>
                    </ul>
                </nav>
            </div>
            { friendComponentDisplay && <AddFriend />}
            { requestComponentDisplay && <AcceptFriends /> }
    </div>
     )
 }
}


export default withRouter(Navbar)
