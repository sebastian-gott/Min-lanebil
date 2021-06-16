import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../server/firebase'

const AuthProvider = React.createContext()

//Gir tilgang til verdiene i andre komponenter
export function useAuth() {
  return useContext(AuthProvider)
}

//1. Dette er informasjon som vi ønsker at skal få tilgang til context
//2. gjeldeneBruker håndtere alle bruker attributter. f.eks. info ved registrering og state til ulike komponenter

export function AuthContext({ children }) {
  const [loading, setLoading] = useState(true)
  const [ currentUser, setCurrentUser ] = useState()
  const [friendRequestId, setFriendRequestId] = useState()

  const userRef = db.collection('users')
  const friendReqRef = db.collection('friendRequests')


//Henter inn informasjon fra registering og legger det inn i firebase
  function registrer(email, password, username) {
    auth.createUserWithEmailAndPassword(email, password).then( cred => {
      return userRef.doc(cred.user.uid).set({
        username,
        refId: cred.user.uid,
        friends: [],
        friendRequets: false
      })  
    })
  console.log(registrer)
  }
  
  function logOut() {
    auth.signOut()
  }

  function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
  }

  function addFriend(username) {
    userRef.where('username', '==', username).get()
    .then(snapshot => {
      const userResult = snapshot.docs.map(doc => doc.data().refId)
      setFriendRequestId(userResult.toString(0))
      //console.log(userResult.toString(0))
    })
    
    friendReqRef.doc(friendRequestId).set({
      to: friendRequestId,
      from: currentUser.uid
    })
    userRef.doc(friendRequestId).update({
      friendRequests: true
    })
    setFriendRequestId('')
  }

  //useEffect: Når noe skjer vil vi at en bivirkning skal skje
  //setTimeout setter en delay før den skal displaye fornavn og etternavn
  //3. Unsubscribe gjør slik at etter eventen har skjedd, stopper serveren å lytte til den
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      return unsubscribe
    })

    
  }, [])

  //Ulike verdier man gir Provider tilgang til å lytte etter
  const value = {
    currentUser,
    registrer,
    logOut,
    signIn,
    addFriend
  }

  return (
      //1. Setter inn all data i Provider som trenger tilgang til informasjon i context
      //2. Alt på innsiden av Provider wrapperen har tilgang til denne informasjonen
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  )
}
