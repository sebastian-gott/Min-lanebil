import React, { useRef } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function AddFriend() {

    const { addFriend } = useAuth()

    const usernameRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        addFriend(usernameRef.current.value)
    }

    return (
        <div className="popup-screen friendRequest">
            <p className="tag-text">Skriv inn brukernavn til personen du vil legge til</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Brukernavn" ref={usernameRef} />
                <button className="btn" type="submit">Send venneforspørsel</button>
            </form>
            <button className="btn">Lukk vindu</button>
        </div>
    )
}
