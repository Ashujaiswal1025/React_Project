import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import cartStore from './Redux-Folder/store.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>
       <App />
    </Provider>
  </StrictMode>
)
