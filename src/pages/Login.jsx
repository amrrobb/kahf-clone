import { useState } from "react"
import { LoginBox, RegisterBox } from "../components"
import { Toaster } from 'react-hot-toast';
// Login and Register
export default function Login(params) {
    const [loginPage, setLoginPage] = useState(true)

    return (
        <>
            {/* <Toaster toastOptions={{
                duration: 3000,
                position: "top-center",
                style: {
                    width: "20rem",
                    marginTop: '3rem',
                    background: 'black',
                    color: 'white',
                    padding: '0.25rem'
                }
            }} /> */}
            <div className={loginPage ? '' : 'hidden'}>
                <LoginBox setLoginPage={setLoginPage}/>
            </div>
            <div className={loginPage ? 'hidden' : ''}>
                <RegisterBox setLoginPage={setLoginPage} />
            </div>
        </>
    )
}