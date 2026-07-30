import React from 'react'
import AppRoutes from './AppRoutes'
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'

const App = () => {
  return (
    <div>
      <AuthProvider>
      <AppRoutes/>
      </AuthProvider>
    </div>
  )
}

export default App