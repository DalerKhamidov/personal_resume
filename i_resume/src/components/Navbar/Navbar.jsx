import React from 'react';
import { FaCaretDown } from "react-icons/fa";

const NavLinks =[
    {
        id: 1,
        name: "Projects",
        link: "/#",
    },
    {
        id: 1,
        name:"About Me",
        link:"/#"
    },
    {
        id:1,
        name:"Contact",
        link:"/#"
    },
];
const Navbar = () => {
  return (
    <>
        <div className="bg-secondary shadow-md">
            <div className="container flex justify-between py-4 sm:py-3">
                {/* logo section */}
                <div className="font-bold text-3xl">Daler</div>
                {/* Navlinks */}
                <div>
                    <ul className='flex items-center gap-10'>
                        {
                            NavLinks.map(({id, name, link}) => {
                                return (
                                    <li key={id}>
                                        <a href={link} className='inline-block hover:text-primary text-xl font-semibold'>
                                            {name}
                                        </a>
                                    </li>
                                );
                            })
                        }

                        {/* simple dropdown and links  */}
                        <li className='cursor-pointer group'>
                            <a href = "/#"
                            className='inline-block hover:text-primary text-xl font-semibold'>
                                <div className='flex items-center gap-[2px] py-2'>
                                    Dropdown
                                    <span>
                                        <FaCaretDown 
                                        className="group-hover:rotate-180
                                        duration-300" />
                                    </span>
                                </div>
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default Navbar