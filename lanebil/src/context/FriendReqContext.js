import React, { useContext } from 'react'

const friendProvider = React.createContext()

export default function FriendReqContext() {
    return useContext(friendProvider)
}


export function friendContext({ children }) {
    
}
