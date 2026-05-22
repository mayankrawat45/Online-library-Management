import { useSelector } from "react-redux"
import BookCard from "../components/BookCard"
import { useParams } from "react-router-dom"
import { useState } from "react"

function BrowseBooks() {
  const books = useSelector((state) => state.books)
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category === category
      : true

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })
  return (
    <section className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Browse Books
      </h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-[400px] px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-700 outline-none mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            ))
          ) : (
            <p className="text-zinc-400 text-xl">
              No books found.
            </p>
          )
        }
      </div>
    </section>
  )
}

export default BrowseBooks