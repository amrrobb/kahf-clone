import { useState } from "react"
import { LoginBox, RegisterBox } from "../components"
// Login and Register
export default function Login(params) {
    const [loginPage, setLoginPage] = useState(true)

    return (
        <>
            <div className={loginPage ? '' : 'hidden'}>
                <LoginBox setLoginPage={setLoginPage}/>
            </div>
            <div className={loginPage ? 'hidden' : ''}>
                <RegisterBox setLoginPage={setLoginPage} />
            </div>
        </>
    )
}