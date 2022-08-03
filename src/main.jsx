import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Body from './components/Body'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './components/Product/ProductPage'
import CategoryPage from './components/Category/CategoryPage'
import PersonPage from './components/Person/PersonPage'
import QuotationPage from './components/Quotation/QuotationPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/productos" element={<ProductPage />} />
          <Route path="/categorias" element={<CategoryPage />} />
          <Route path="/personas" element={<PersonPage />} />
          <Route path="/generar-cotizacion" element={<QuotationPage />} />
        </Routes>
      </BrowserRouter>
    </Body>
  </React.StrictMode>
)
