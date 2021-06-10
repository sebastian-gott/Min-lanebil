import React from 'react'

export default function AddFriend() {
   const addFriend = document.querySelector('.popup-screen')

    function handleCloseWindow() {
       addFriend.style.display = 'none'
    }

    return (
        <div className="popup-screen friendRequest">
            <p className="tag-text">Skriv inn brukernavn til personen du vil legge til</p>
            <form>
                <input type="text" placeholder="Brukernavn" />
                <button className="btn">Send venneforspørsel</button>
            </form>
            <button className="btn" onClick={handleCloseWindow}>Lukk vindu</button>
        </div>
    )
}
