import React from 'react'
import { Link, useLocation } from "react-router-dom"

const NotFound = () => {
  const location = useLocation();
  return (
  <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
    <div className="text-center">
      <h1 className="text-7xl font-bold text-[#FFB347]">
        404
      </h1>

      <p className="text-2xl mt-6">
        Page Not Found
      </p>

      <p className="text-zinc-400 mt-4">
        Invalid Route: {location.pathname}
      </p>

      <Link
        to="/"
        className="inline-block mt-8 bg-[#FFB347] text-black px-6 py-3 rounded-lg font-semibold"
      >
        Back to Home
      </Link>
    </div>
  </section>
)
}

export default NotFound