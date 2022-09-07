import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import LinksAuth from '../components/LinksAuth'

const AuthLayout = () => {
    const {name} = useAuth()
  return (
      <Fragment>
      <header>
        <h1>SUPERMENTORA HEADER</h1>
        <LinksAuth />
      </header>
        <main className="">
            <Outlet />

        </main>

        
    </Fragment>
  )
}

export default AuthLayout