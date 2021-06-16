import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { db } from '../../server/firebase'

export default function AcceptFriends() {
    const { currentUser } = useAuth()

    const [requestUsers, setRequestUsers] = useState()
    const [loading, setLoading] = useState()

    const userRef = db.collection('users')
    const friendReqRef = db.collection('friendRequests')

    useEffect(() =>{
        friendReqRef.where('to', '==', currentUser.uid).get()
        .then(snapshot => {
            const userDocs = snapshot.docs.map(doc => doc.data().from)
            setRequestUsers(userDocs)
            console.log(requestUsers)
        })
  
    }, [])

    


    return (
        <div className="friend-popup">
            <p>Du har venneforspørseler</p>
            <ul className="request-list">

            </ul>
        </div>
    )
}
