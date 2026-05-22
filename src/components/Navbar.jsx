    import React from 'react'
    import { Link } from "react-router-dom"
    import logo from "../assets/logo.svg"

    const Navbar = () => {
        return (
            <nav className="flex items-center justify-between px-8 py-4 bg-black text-[#FFB347]">
                <div className='w-40'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex gap-6 text-lg font-medium'>
                    <Link className='hover:text-white duration-200' to="/">Home</Link>

                    <Link className='hover:text-white duration-200' to="/books">
                        Browse Books
                    </Link>

                    <Link className='hover:text-white duration-200' to="/add-book">
                        Add Book
                    </Link>
                </div>
            </nav>
        )
    }

    export default Navbar