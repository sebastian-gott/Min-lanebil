import React, {useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const {signIn} = useAuth()

    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        await signIn(emailRef.current.value, passwordRef.current.value)
        history.push("/")
    }

    return (
    <div className="content-page Login">
        <div className="card-panel">
            <h1>Logg inn</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="email" placeholder="Email..." ref={emailRef} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Passord..." ref={passwordRef} /> 
                </div>
                <button type="submit" className="btn">Logg inn</button>
            </form>
        </div>        
    </div>
    )
}
