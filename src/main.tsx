import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './global.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
)
