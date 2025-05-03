import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {

    const [open, close] = useState(false)
    const togglemenu = () => { 
        close(!open)

    }

    const Navmenu = [
        
        { href: "/", name: "home" },
        { href: "/", name: "about" },
        { href: "/", name: "service" },
        { href: "/", name: "contact" },

    ]

    return (


        <nav className='bg-black text-white items-center justify-between flex h-10 px-10 relative'>
            <div>

                logo
            </div>

            <ul className='hidden md:flex gap-4'>
                {
                    Navmenu.map((item, key) => (
                        <li key={key}><a href={item.href}>{item.name}</a></li>
                    ))
                }

            </ul>




            <div className='hidden md:flex' >
                <input type="text" name="" id="" />
                <button>submit</button>
            </div>

            <div className='block md:hidden' onClick={togglemenu}>
                {open ? <FaBars /> : <RxCross1 />}



            </div>

            {
                open && (
                    <ul className='flex  flex-col w-full absolute top-0 left-0  bg-black text-white mt-15 justify-center text-center items-center'>
                        {
                            Navmenu.map((item,key)=>(
                                <li><a href={item.href}>{item.name}</a></li>
                            ))
                        }


                    </ul>

                )
            }
        </nav>
    )
}
