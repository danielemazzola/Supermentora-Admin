import React from 'react'
import { Link } from 'react-router-dom'

const LinksAuth = () => {
  return (
    <nav className="w-full flex justify-around bg-sky-300">
        <Link to='/' className="text-red-500 py-2 hover:bg-red-200 px-2">Home</Link>
        <Link to='/login' className="text-red-500 py-2 hover:bg-red-200 px-2">Login</Link>
        <Link to='/register' className="text-red-500 py-2 hover:bg-red-200 px-2">Register</Link>
    </nav>
  )
}

export default LinksAuth