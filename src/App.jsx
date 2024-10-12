import React from 'react'
import RepoList from './pages/RepoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactjs" element={<RepoList />} />
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}
