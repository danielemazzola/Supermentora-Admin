import React from 'react'

const ForgetPassword = () => {
  return (
    <section className="my-10">
        <h1 className="px-5">Bienvenid@ de nuevo Administrador /a</h1>
        <form className="flex flex-col items-center px-5 sm:px-0 mt-10">
          <div className="flex flex-col border-l-8 border-gray-200 py-4 px-2 w-1/2 sm:w-1/3 md:w-1/2">
            <label htmlFor="email">Email</label>
            <input type='text' id="email" className='border-2 rounded px-1' />
            <button className='my-3 bg-sky-400 py-1 px-2 rounded.lg text-white text-lg rounded hover:bg-sky-600'>Recover password</button>
          </div>
        </form>
    </section>
  )
}

export default ForgetPassword