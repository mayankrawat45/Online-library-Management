import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBook } from "../redux/bookSlice"

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    rating: ""
  })

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      addBook({
        id: Date.now(),
        ...formData
      })
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <section className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-8">
          Add New Book
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit} >
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
            className="bg-zinc-800 px-5 py-3 rounded-lg outline-none"
          />
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
            className="bg-zinc-800 px-5 py-3 rounded-lg outline-none"
          />
          <textarea
            name="description"
            placeholder="Enter book description"
            value={formData.description}
            onChange={handleChange}
            className="bg-zinc-800 px-5 py-3 rounded-lg outline-none h-32 resize-none"
          />
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            className="bg-zinc-800 px-5 py-3 rounded-lg outline-none"
          />
          <input
            type="number"
            name="rating"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
            className="bg-zinc-800 px-5 py-3 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="bg-[#FFB347] text-black py-3 rounded-lg font-semibold"
          >
            Add Book
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddBook