import kahf_login from '../assets/kahf_login.jpg'

export default function LoginBox(params) {
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
                            <form className="text-sm">
                                <div className="mb-6">
                                    <label className="font-semibold mb-1">Email</label>
                                    <div>
                                        <input type="text" className="border border-gray-200 w-full py-3 px-4" placeholder="Your Email Address" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="font-semibold mb-1">Password</label>
                                    <div>
                                        <input type="text" className="border border-gray-200 w-full py-3 px-4" placeholder="Your Password"  />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <input type="checkbox" className="mr-1" />   
                                    <label>Remember me </label>
                                </div>

                                <input type="submit" className="bg-black text-white font-semibold text-sm w-full py-3 px-4" value="LOG IN" />
                            </form>
                        </div>
                        <div className="flex justify-center text-[13px] pt-7 mb-16">
                            <p>Forgot your password? <a className="text-[#95BB76] underline" href="/">Click here</a>  </p> 
                        </div>
                    </div>
                    <div className="flex justify-center text-[13px] mt-2 py-5 bg-gray-100">
                        <p>Don't have an account? <a className="text-[#95BB76] underline" href="/">Sign up Here</a>  </p> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}