import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('advent3d-root')

if (rootElement) {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    console.log('3D Calendar React app mounted successfully!')
  } catch (error) {
    console.error('Error mounting 3D Calendar:', error)
    rootElement.innerHTML = `<p style="color: red; text-align: center; padding: 2rem;">Error loading 3D Calendar: ${error.message}</p>`
  }
} else {
  console.error('advent3d-root element not found')
}
