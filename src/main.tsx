import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './styles/index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
