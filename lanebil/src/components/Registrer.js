import React, {useRef} from 'react'
import { useAuth } from '../context/AuthContext'

export default function Registrer() {
    const emailRef = useRef()
    const passordRef = useRef()
    const repeatPasswordRef = useRef()
    const usernameRef = useRef()

    const { registrer } = useAuth()

    function handleSubmit(e){
        e.preventDefault()

        registrer(emailRef.current.value, passordRef.current.value, usernameRef.current.value)
        
    }

    return (
    <div className="content-page Registrer">
        <div className="card-panel">
            <h1>Registrering</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="email" placeholder="Email..." ref={emailRef} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Brukernavn..." ref={usernameRef} /> 
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Passord..." ref={passordRef} /> 
                </div>
                <button type="submit" className="btn">Registrer</button>
            </form>
        </div>
    </div>
    )
}
