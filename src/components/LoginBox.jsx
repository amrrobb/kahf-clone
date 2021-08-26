import kahf_login from '../assets/kahf_login.jpg'
import {VisibilityOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function LoginBox({setLoginPage}) {
    const [visible, setVisible] = useState(false)   
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit } = useForm({
        email: '',
        password: ''
    });
    
    const passwordVisibility = (e) => {
        e.preventDefault()
        return visible ? setVisible(false) : setVisible(true)
    }

    const loginSubmit = async (data) => {
        try {
            const res = await dispatch(loginUser(data))
            if (res) {
                setTimeout(() => {
                    history.push('/')
                }, 3000)
            }

        }
        catch (err) {
            console.log(err);
        }
    } 

    return (
        <>
        <div className="mt-3">
            <div className="relative">
                <div className="w-[35%] z-0 top-10 right-[43%] absolute">
                    <img src={kahf_login} alt=""  />
                </div>
                <div className="w-[35%] z-10 top-28 left-[43%] absolute shadow-2xl border-2 bg-white">
                    <div className="px-10 pt-10">
                        <div className="font-black text-[2.5rem] uppercase font-archivo pr-[6.4rem] leading-none">
                            welcome back and sign in your account
                        </div>
                        <div className="pt-6 px-4">
                            <form className="text-sm" onSubmit={handleSubmit(loginSubmit)}>
                                <div className="mb-6">
                                    <label className="font-semibold mb-1">Email</label>
                                    <div>
                                        <input type="email" className="border focus:outline-none focus:bg-gray-100 border-gray-200 w-full py-3 px-4" placeholder="Your Email Address" name="email" {...register('email') }/>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="font-semibold mb-1">Password</label>
                                    <div className="w-full flex items-center border p-[0] m-[0]">
                                        <input type={visible ? "text" : "password"} className="focus:outline-none focus:bg-gray-100 border-gray-200 w-3/4 py-3 px-4" placeholder="Your Password" name="password" {...register('password') } />
                                        <div className="text-right w-1/4">
                                            <button type="button" onClick={passwordVisibility}>
                                                <VisibilityOutlined className="mr-4"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <input type="checkbox" className="mr-1" />   
                                    <label>Remember me </label>
                                </div>

                                <input type="submit" className="bg-black text-white font-semibold text-sm w-full py-3 px-4 tracking-wider" value="LOG IN" />
                            </form>
                        </div>
                        <div className="flex justify-center text-[13px] pt-7 mb-16">
                            <div className="flex">
                                Forgot your password? &nbsp;<p className="text-[#95BB76] underline hover:text-black">Click here</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-[13px] mt-2 py-5 bg-gray-100">
                        <p>Don't have an account? <button className="text-[#95BB76] underline hover:text-black" onClick={() => setLoginPage(false)}>Sign up Here</button>  </p> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}