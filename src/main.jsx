import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseState from './UseState'
// import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseState />
  </StrictMode>,
)
