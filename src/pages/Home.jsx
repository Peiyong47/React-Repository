import React from 'react'
import Hero from '../components/Home/Hero'
import LatestRepo from '../components/Home/LatestRepo'

export default function Home() {
  return (
    <div className='min-h-screen'>
        <Hero />
        <LatestRepo />
    </div>
  )
}
