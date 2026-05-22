import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function BookDetails() {
  const books=useSelector(state=>state.books)
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  return (
  <section className="min-h-screen bg-zinc-950 text-white p-10">
    <div className="max-w-3xl bg-zinc-900 p-8 rounded-2xl">
      <h1 className="text-5xl font-bold">
        {book.title}
      </h1>

      <p className="mt-4 text-2xl text-zinc-400">
        {book.author}
      </p>

      <p className="mt-6 text-lg text-zinc-300">
        {book.description}
      </p>

      <div className="mt-8 flex gap-6">
        <p className="bg-[#FFB347] text-black px-4 py-2 rounded-lg font-medium">
          Category: {book.category}
        </p>

        <p className="bg-zinc-800 px-4 py-2 rounded-lg">
          Rating: {book.rating}
        </p>
      </div>
    </div>
  </section>
)
}

export default BookDetails