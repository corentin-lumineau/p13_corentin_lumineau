import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signOut } from "../../features/signIn"
import { editUserInformations, setUserInformations } from "../../features/user"
import { useSelector } from "react-redux"
import { selectUserFirstName, selectUserLastName } from "../../utils/selectors"
import { useState } from "react"
import '../../utils/style/Components/EditUser.css'
import '../../utils/style/User/index.css'
import logoBankTree from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons'



export default function User() {

    const dispatch = useDispatch()
    const firstName = useSelector(selectUserFirstName)
    const lastName = useSelector(selectUserLastName)

    const [editUserModale, setUserEditModale] = useState(false)
    const [newFirstName, setNewFirstName] = useState(firstName)
    const [newLastName, setNewLastName] = useState(lastName)

    const toggleFirstNameInput = () => {
        const data = document.getElementById("firstname").value
        setNewFirstName(data)
    }

    const toggleLastNameInput = () => {
        const data = document.getElementById("lastname").value
        setNewLastName(data)
    }

    
    useEffect(() => {
        dispatch(setUserInformations())
    })

    return(
        <div>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                    className="main-nav-logo-image"
                    src={logoBankTree}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div className="wrapper-nav">
                    <a className="main-nav-item" href="./user.html">
                    <FontAwesomeIcon icon={faUserCircle} className="sign-out-icon" />
                    {firstName}
                    </a>
                    <a className="main-nav-item" href="/">
                    <FontAwesomeIcon icon={faRightFromBracket} className='sign-out-icon' />
                    <button className='sign-out-button' onClick={(e) => dispatch(signOut(e))}> SignOut </button>
                    </a>
                </div>
            </nav>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    {
                        editUserModale ?    <div className="container-edit">
                                                <div className="edit-inputs">
                                                    <label>FirstName</label><input type="text" id="firstname" defaultValue={firstName} onChange={() => toggleFirstNameInput()} />
                                                    <label>LastName</label><input type="text" id="lastname" defaultValue={lastName} onChange={() => toggleLastNameInput()}/>
                                                </div>
                                                <div className="submit-container">
                                                    <button className="edit-user-button" onClick={(e) => {
                                                        dispatch(editUserInformations(newFirstName, newLastName, e))
                                                        setUserEditModale(false)
                                                    } }>
                                                        Save
                                                    </button>
                                                    <button className="edit-user-button" onClick={() => setUserEditModale(false)}>Cancel</button>
                                                </div>
                                            </div> 
                    : 
                    <button className="edit-button" onClick= {() => setUserEditModale(true)}>Edit Name</button>
                    }
                    
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

