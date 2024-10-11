import React from 'react'
import RepoList from './pages/RepoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactjs" element={<RepoList />} />
      </Routes>
    </BrowserRouter>
  )
}
