import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import LinksAuth from '../components/LinksAuth'

const AuthLayout = () => {
    const {name} = useAuth()
  return (
      <Fragment>
      <header>
        <hi>SUPERMENTORA HEADER</hi>
        <LinksAuth />
      </header>
        <main className="">
            <Outlet />

        </main>

        
    </Fragment>
  )
}

export default AuthLayout