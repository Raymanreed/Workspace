import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import TestPage from './pages/testPages.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
