import React from 'react'


const Login = () => {
  return (
    <section className="mt-10">
        <h1 className="px-5">Bienvenid@ de nuevo Administrador /a</h1>
        <form className="flex flex-col items-center px-5 sm:px-0 mt-10">
          <div className="flex flex-col border-l-8 border-gray-200 py-4 px-2 w-1/2 sm:w-1/3 md:w-1/2">
            <label>User</label>
            <input type='text' className='border-2' />
            <label>Password</label>
            <input type='password' className='border-2' />
          </div>
        </form>
    </section>
  )
}

export default Login