import logoBankTree from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { logUser } from '../../features/signIn'
import { Navigate } from 'react-router-dom'
import { selectToken } from '../../utils/selectors'

export default function SignIn() {
    const dispatch = useDispatch()
    const [emailInput, setEmailInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
  

    const toggleEmailInput = () => {
      const data = document.getElementById('username').value
      setEmailInput(data)
    }

    const togglePasswordInput = () => {
      const data = document.getElementById('password').value
      setPasswordInput(data)
    }

    const token = useSelector(selectToken)
    
    return (
      <div>
        { token  !== '' ? (
          <Navigate to="/profile" replace={true} />
        ) : null }
        <nav className="main-nav">
          <a className="main-nav-logo" href="./index.html">
            <img
              className="main-nav-logo-image"
              src={logoBankTree}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            <a className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        </nav>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label>Username</label><input type="text" id="username" onChange={() => toggleEmailInput()} />
              </div>
              <div className="input-wrapper">
                <label>Password</label><input type="password" id="password" onChange={() => togglePasswordInput()} />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label>Remember me</label>
              </div>
              <button className="sign-in-button" onClick={(e) => dispatch(logUser(emailInput, passwordInput, e))}>Sign In</button>
            </form>
          </section>
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    )
}