import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext>,
)
