import React from 'react'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'

const Register = () => {
  const {
      name,
      setName,
      email,
      setEmail,
      phone,
      setPhone,
      password,
      setPassword,
      repeatPasswor,
      setRepeatPassword,
      message,
      setMessage
  } = useAuth()

  const handleFormRegister= (e) => {
    e.preventDefault()
    if([name, email, phone, password, repeatPasswor].includes('')) {
      setMessage({
        msg:'all fields are required',
        error:true
      })
      setInterval(() => {
        setMessage({})
      }, 3000);
      return
    }
  }
  const {msg} = message

  return (
    <section className="my-10">
        <h1 className="px-5">Register new Admin</h1>
        <form onSubmit={handleFormRegister} className="flex flex-col items-center px-5 sm:px-0 mt-10">
          <div className="flex flex-col border-l-8 border-gray-200 py-4 px-2 w-1/2 sm:w-1/3 md:w-1/2">
            <div>
              { msg && <Alert message={message} /> }
            </div>
            <label htmlFor="user">User</label> 
            <input value={name} onChange={e => setName(e.target.value)} type='text' id="user" className='border-2 rounded px-1' />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={e=> setEmail(e.target.value)} type='email' id="email" className='border-2 rounded px-1' />
            <label htmlFor="phonenumber">Phone number</label>
            <input value={phone} onChange={e=> setPhone(e.target.value)} type='text' id="phonenumber" className='border-2 rounded px-1' />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} type='password' id="password" className='border-2 rounded px-1' />
            <label htmlFor="repeat">Repeat password</label>
            <input value={repeatPasswor} onChange={e=> setRepeatPassword(e.target.value)} type='password' id="repeat" className='border-2 rounded px-1' />
            <button className='my-3 bg-sky-400 py-1 px-2 rounded.lg text-white text-lg rounded hover:bg-sky-600'>Register</button>
            <Link to='/forget-password' className='text-xs text-gray-500 hover:text-red-600'>¿Forget Password?</Link>
          </div>
        </form>
    </section>
  )
}

export default Register