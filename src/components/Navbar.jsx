    import React from 'react'
    import { Link } from "react-router-dom"
    import logo from "../assets/logo.svg"

    const Navbar = () => {
        return (
            <nav className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-4 bg-black text-[#FFB347]">
                <div className='w-40'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex flex-wrap justify-center gap-6 text-lg font-medium'>
                    <Link className='hover:text-white duration-300 hover:scale-105 transition-all' to="/">Home</Link>

                    <Link className='hover:text-white duration-300 hover:scale-105 transition-all' to="/books">
                        Browse Books
                    </Link>

                    <Link className='hover:text-white duration-300 hover:scale-105 transition-all' to="/add-book">
                        Add Book
                    </Link>
                </div>
            </nav>
        )
    }

    export default Navbar