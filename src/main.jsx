// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import { LandingPage } from './screens/LandingPage/LandingPage.tsx'
// // import '../tailwind.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <LandingPage />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import '../tailwind.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
