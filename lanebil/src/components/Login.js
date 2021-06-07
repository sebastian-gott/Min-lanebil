import React from 'react'

export default function Login() {
    return (
    <div className="content-page Login">
        <div className="card-panel">
            <h1>Logg inn</h1>
            <form>
                <div className="input-field">
                    <input type="email" placeholder="Email..." />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Passord..." /> 
                </div>
                <button type="submit" className="btn">Logg inn</button>
            </form>
        </div>        
    </div>
    )
}
