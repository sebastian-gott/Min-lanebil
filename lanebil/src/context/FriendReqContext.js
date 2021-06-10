import React, { useContext, useEffect, useState } from 'react'
import { db } from '../server/firebase'
import { useAuth } from './AuthContext'

const FriendProvider = React.createContext()

//Gir tilgang til verdiene i andre komponenter
export function useFriend() {
  return useContext(FriendProvider)
}

//1. Dette er informasjon som vi ønsker at skal få tilgang til context
//2. gjeldeneBruker håndtere alle bruker attributter. f.eks. info ved registrering og state til ulike komponenter

export function AuthContext({ children }) {
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(true)




  //Ulike verdier man gir Provider tilgang til å lytte etter
  const value = {
    checkRequestFlag
  }

  return (
      //1. Setter inn all data i Provider som trenger tilgang til informasjon i context
      //2. Alt på innsiden av Provider wrapperen har tilgang til denne informasjonen
    <FriendProvider.Provider value={value}>
      {!loading && children}
    </FriendProvider.Provider>
  )
}
