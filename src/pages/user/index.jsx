import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signOut } from "../../features/signIn"
import { setUserInformations } from "../../features/user"



export default function User() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setUserInformations())
    })
    
    /* const firstName = useSelector(selectUserFirstName) */

    

    return(
        <div>
            <nav class="main-nav">
                <a class="main-nav-logo" href="./index.html">
                    <img
                    class="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href="./user.html">
                    <i class="fa fa-user-circle"></i>
                    Tony
                    </a>
                    <a class="main-nav-item" href="./index.html">
                    <i class="fa fa-sign-out"></i>
                    <button onClick={(e) => dispatch(signOut(e))}> Log Out </button>
                    </a>
                </div>
            </nav>
            <main class="main bg-dark">
                <div class="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button class="edit-button">Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                    <p class="account-amount">$2,082.79</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                        <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                        <p class="account-amount">$10,928.42</p>
                        <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                        <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                        <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p class="account-amount">$184.30</p>
                        <p class="account-amount-description">Current Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                        <button class="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <footer class="footer">
                <p class="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

