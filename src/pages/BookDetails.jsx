import { useParams } from "react-router-dom"

function BookDetails() {

  const { id } = useParams();

  return (
    <section className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold">
        Book Details
      </h1>

      <p className="mt-4 text-xl">
        Book ID: {id}
      </p>
    </section>
  )
}

export default BookDetails