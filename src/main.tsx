import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Home/Home'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
