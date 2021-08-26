import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import {fetchCart, logoutUser, loginStatus} from '../store/actions'

export default function NavBar(params) {
    const cart = useSelector(state => state.cart)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart())
    }, [])

    useEffect(() => {
        if (localStorage.getItem('account')) {
            dispatch(loginStatus(true))
        } else {
            dispatch(loginStatus(false))
        }
    }, [])

    return (
        <>
        <div>
        <Toaster 
                id="logout-toast"
                toastOptions={{
                duration: 3000,
                position: "top-center",
                style: {
                    width: "20rem",
                    marginTop: '3rem',
                    background: 'black',
                    color: 'white',
                    padding: '0.25rem'
                }
            }} />
        </div>
        <div className="fixed w-full m-0 top-0 bg-white z-30"> 
            <div className="px-2 py-2.5 grid grid-flow-col grid-cols-3 gap-4 bg-[#3C4536]">
                <div></div>
                <div className="text-center">
                    <p className="text-white text-sm">NEW: Kahf Gentle Exfoliating Face Scrub</p>
                </div>
                <div className="text-right text-white text-sm">
                    <div className="flex justify-end mr-3">
                        <NavLink exact to="/cart" >
                            <div className="flex mx-3 items-center">
                                <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/group-1.png" alt="" className="w-auto h-[20px] pr-2"/>
                                ({cart.length})
                            </div>
                        </NavLink>
                        <p className="font-thin text-gray-400">| </p>
                        
                        <div className="flex mx-3 items-center">
                            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/path-1.png" alt="" className="w-auto h-[20px] pl-2 pr-2"/>
                            (0)  
                        </div>
                        <p className="font-thin text-gray-400">| </p>
                         
                        {
                            !isLoggedIn
                            ?
                            <NavLink exact to="/my-account" >
                                <div className="flex ml-3 items-center">
                                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" className="w-auto h-[20px] pl-2 pr-2"/> 
                                    LOGIN 
                                </div>
                            </NavLink>
                            :
                            <div className="flex ml-3 items-center">
                                <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" className="w-auto h-[20px] pl-2 pr-2"/> 
                                <button type="button" onClick={() => dispatch(logoutUser())}>
                                    LOGOUT 
                                </button>
                            </div>

                        }
                        
                    </div>
                </div>
            </div>
            <div className="px-3 pt-5 grid grid-flow-col grid-cols-3 gap-4">
                <div>
                    <div className="pt-2 pl-8 flex items-center focus:outline-none">
                        <NavLink exact to="/" >
                            <img className="h-8" src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png"  alt="logo"/>
                        </NavLink>
                    </div>
                </div>
                <div className="">
                    <div className="pt-5 pb-9">
                        <nav className="uppercase tracking-wider flex justify-around items-center text-xs text-[#707070] font-bold px-3">
                            <div className="hover:text-gray-800">
                                <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "black"}}> home </NavLink>
                            </div>
                            <div className="hover:text-gray-800">
                                <NavLink exact to="/kahf-shop" activeStyle={{fontWeight: "bold", color: "black"}}> shop </NavLink>
                            </div>
                            <div className="hover:text-gray-800">
                                <NavLink exact to="/brand" activeStyle={{fontWeight: "bold", color: "black"}}> brand </NavLink>
                            </div>
                            <div className="hover:text-gray-800">
                                <NavLink exact to="/kahf-program" activeStyle={{fontWeight: "bold", color: "black"}}> kahf proram </NavLink>
                            </div>
                            <div className="hover:text-gray-800">
                                <NavLink exact to="/discovery" activeStyle={{fontWeight: "bold", color: "black"}}> discovery </NavLink>
                            </div>
                        </nav>
                    </div>
                    <hr className="text-gray-400" />
                    
                </div>
                <div className="flex justify-end mr-3">
                    <div className="flex bg-[#D6D6D6] px-4 py-2 w-72 h-10 justify-between">
                        <input type="text" placeholder="Type to search" className="bg-transparent text-sm focus:outline-none flex items-start" /> 
                        <span className="material-icons p-0 m-0 text-[#1f1f1f] font-thin" style={{"transform": "scaleX(-1)"}} >search</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[9%]" />
        </>
    )
}