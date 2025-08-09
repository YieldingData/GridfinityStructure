import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
if (!root) {
  console.error('❌ #root not found')
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
