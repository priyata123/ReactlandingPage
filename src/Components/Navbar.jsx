import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Contact from './Contact';



const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const [showform, setshowform] = useState(false);
    const handleChange = () => {
        setmenu(!menu);
    };

    console.log("ShowForm", showform);
    const closemenu = () => {
        setmenu(false);

    };
    const openForm = () => {
        setshowform(true);
        setmenu(false);
    }
    const closeFrom = () => {
        setshowform(false);
    }

    return (
        <div className='fixed w-full z-10 text-white'>
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-teal-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Link to='home' spy={true} smooth={true} duration={500}>
                            <h1 className='text-2xl font-semibold'>Wellnessvista</h1>
                        </Link>
                    </div>
                    <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer'>About Us</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer'>Services</Link>
                        <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer'>Doctors</Link>
                        <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-orange-400 cursor-pointer'>Blog</Link>
                    </nav>
                    <div className='hidden lg:flex'>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out' onClick={() => openForm()}>
                            contact Us
                        </button>
                    </div>
                    {showform && <Contact closeFrom={closeFrom} />}
                    <div className='lg:hidden flex items-center'>
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (<AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-teal-500 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transform duration-300`}>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer' onClick={closemenu}>Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer' onClick={closemenu}>About Us</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer' onClick={closemenu}>Services</Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-orange-400 transition-all cursor-pointer' onClick={closemenu}>Doctors</Link>
                    <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-orange-400 cursor-pointer' onClick={closemenu}>Blog</Link>
                    <div className='lg:hidden'>
                        <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition duration-300 ease-in-out' onClick={openForm}>contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;