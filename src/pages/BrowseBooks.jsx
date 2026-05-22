import books from "../data/books"
import BookCard from "../components/BookCard"

function BrowseBooks() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Browse Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          books.map((book)=>(
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              author={book.author}
            />
          ))
        }
      </div>
    </section>
  )
}

export default BrowseBooks