import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './authLayouts/Auth';
import { AuthProvider } from './context/AuthProvider';
import Index from './views/Index'
import Login from './views/Login'
import Register from './views/Register'
import ForgetPassword from './views/ForgetPassword'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Auth />}>
                <Route index element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
              {/*
                <Route path="registrarme" element={<Registrar />} />
                <Route path="olvide-password" element={<OlvidePassword />} />
                <Route
                  path="olvide-password/:token"
                  element={<NuevaPassword />}
                />
                <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

              */}
            </Route>
          </Routes>
        </AuthProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
