import React from 'react'
import { Link } from "react-router-dom"

const BookCard = ({ id,title, author, description }) => {
   
    return (
        <div className="bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFB347]/10 transition-all duration-300">
            <h3 className="text-2xl font-bold">
                {title}
            </h3>

            <p className="text-zinc-400 mt-2">
                {author}
            </p>

            <p className="mt-4 text-zinc-300">
                {description}
            </p>

            <Link
                to={`/book/${id}`}
                className="inline-block mt-6 bg-[#FFB347] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#ffc266] transition-all duration-300"
            >
                View Details
            </Link>
        </div>
    )
}

export default BookCard