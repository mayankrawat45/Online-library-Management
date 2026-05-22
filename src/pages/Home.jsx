import React from 'react'
import BookCard from '../components/BookCard'
import books from '../data/books'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="min-h-screen bg-zinc-950 text-white px-10 py-16">
            <div className="max-w-4xl">
                <h1 className="text-6xl font-bold leading-tight">
                    Welcome to
                    <span className="text-[#FFB347]"> Online Library</span>
                </h1>

                <p className="mt-6 text-lg text-zinc-300">
                    Discover thousands of books from different categories.
                    Read, explore, and manage your personal library easily.
                </p>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-6">
                    Book Categories
                </h2>

                <div className="flex gap-4 flex-wrap">
                    <Link to='/books/Fiction' className="bg-[#FFB347] text-black px-6 py-3 rounded-full font-medium">
                        Fiction
                    </Link>

                    <Link to='/books/Non-Fiction' className="bg-zinc-800 px-6 py-3 rounded-full">
                        Non-Fiction
                    </Link>

                    <Link to='/books/Sci-Fi' className="bg-zinc-800 px-6 py-3 rounded-full">
                        Sci-Fi
                    </Link>

                    <Link to='/books/Mystery' className="bg-zinc-800 px-6 py-3 rounded-full">
                        Mystery
                    </Link>

                    <Link to='/books/History' className="bg-zinc-800 px-6 py-3 rounded-full">
                        History
                    </Link>
                </div>
            </div>
            <div className="mt-20">
                <h2 className="text-3xl font-semibold mb-8">
                    Popular Books
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        books.map((book) => {
                            return <BookCard
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                description={book.description}
                            />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Home