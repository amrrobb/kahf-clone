import kahf_register from '../assets/kahf_register.jpg'
import {VisibilityOutlined } from '@material-ui/icons'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
// import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions';

export default function RegisterBox({setLoginPage}) {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)    
    const { register, handleSubmit, formState: { errors } } = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const registerSubmit = async (data) => {
        try {
            console.log(data);
            const res = await dispatch(registerUser(data))
            if (res) {
                setTimeout(() => {
                    setLoginPage(true)
                }, 3000)
            }

        }
        catch (err) {
            console.log(err);
        }
    } 

    const passwordVisibility = (e) => {
        e.preventDefault()
        return visible ? setVisible(false) : setVisible(true)
    }

    return (
        <>
        <div className="mt-3">
            <div className="relative">
                <div className="w-[35%] z-0 top-10 right-[43%] absolute">
                    <img src={kahf_register} alt=""  />
                </div>
                <div className="w-[35%] z-10 top-28 left-[43%] absolute shadow-2xl border-2 bg-white">
                    <div className="px-10 pt-10">
                        <div className="font-black text-[2.5rem] uppercase font-archivo flex flex-wrap pr-20 leading-none">
                            welcome to kahf and let's join
                        </div>
                        <div className="pt-8 px-2">
                            <form className="text-sm" onSubmit={handleSubmit(registerSubmit)}>
                                <div className="mb-5">
                                    <label className="font-semibold mb-1">Name</label>
                                    <div>
                                        <input type="text" className="focus:outline-none focus:bg-gray-100 border border-gray-200 w-full py-3 px-4" placeholder="Type Your Name Here" name="name" {...register('name', {required: true})}/>
                                        <div className="text-xs mt-1 text-gray-700">
                                            {errors.name?.type === 'required' && "Name cannot be empty"}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label className="font-semibold mb-1">Email</label>
                                    <div>
                                        <input type="email" className="focus:outline-none focus:bg-gray-100  border border-gray-200 w-full py-3 px-4" placeholder="Your Email Address"
                                        name="email" {...register("email", {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} />
                                        <div className="text-xs mt-1 text-gray-700">
                                            {errors.email?.type === 'required' && "Email cannot be empty"}
                                            {errors.email?.type === 'pattern' && "Input must be an email"}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label className="font-semibold mb-1">Password</label>
                                    <div className="w-full flex items-center border p-[0] m-[0]">
                                        <input type={visible ? "text" : "password"} className="focus:outline-none focus:bg-gray-100 border-gray-200 w-3/4 py-3 px-4" placeholder="Your Password" 
                                        name="password" {...register("password", {required: true, minLength: 8, })} />
                                                       
                                        <div className="text-right w-1/4">
                                            <button type="button" onClick={passwordVisibility} >
                                                <VisibilityOutlined className="mr-4"/>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="text-xs mt-1 text-gray-700">
                                        {errors.password?.type === 'required' && "Password cannot be empty"}
                                        {errors.password?.type === 'minLength' && "Password minimum 8 characters"}
                                    </div>
                                </div>

                                <div className="flex justify-center text-[13px] mt-9 mb-5">
                                    <p className="text-gray-400">By clicking this button, you agree to Kahf's &nbsp;</p> <p className="text-[#95BB76] underline hover:text-black" >privacy policy</p> 
                                </div>

                                <input type="submit" className="bg-black text-white font-semibold w-full py-3 px-4 tracking-wider" value="REGISTER" />
                            </form>
                        </div>
                    </div>
                    <div className="flex justify-center text-[13px] mt-[4rem] py-5 bg-gray-100">
                        <p>Already have an account? <button className="text-[#95BB76] underline hover:text-black" onClick={() => setLoginPage(true)} >Login Here</button>  </p> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}