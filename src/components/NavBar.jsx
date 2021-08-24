export default function NavBar(params) {
    return (
        <>
        <div className="fixed w-full m-0 top-0 bg-white z-30"> 
            <div className="px-2 py-2.5 grid grid-flow-col grid-cols-3 gap-4 bg-[#3C4536]">
                <div></div>
                <div className="text-center">
                    <p className="text-white text-sm">NEW: Kahf Gentle Exfoliating Face Scrub</p>
                </div>
                <div className="text-right text-white text-sm">
                    <div className="flex justify-end ">
                        <div className="flex mx-3 items-center">
                            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/group-1.png" alt="" className="w-auto h-[20px] pr-2"/>
                            (0)
                        </div>
                        <p className="font-thin text-gray-400">| </p>
                        
                        <div className="flex mx-3 items-center">
                            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/path-1.png" alt="" className="w-auto h-[20px] pl-2 pr-2"/>
                            (0)  
                        </div>
                        <p className="font-thin text-gray-400">| </p>
                        
                        <div className="flex ml-3 items-center">
                            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" className="w-auto h-[20px] pl-2 pr-2"/> 
                            LOGIN 
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 pt-5 grid grid-flow-col grid-cols-3 gap-4">
                <div>
                    <div className="pt-2 pl-8 flex items-center focus:outline-none">
                        <a  href="/" className="">
                            <img className="h-8" src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png"  alt="logo"/>
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="pt-5 pb-9">
                        <nav className="uppercase tracking-wider flex justify-around items-center text-xs text-[#707070] font-bold px-3">
                            <div>
                                home
                            </div>
                            <div>
                                shop
                            </div>
                            <div>
                                brand
                            </div>
                            <div>
                                kahfs program
                            </div>
                            <div>
                                discovery
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