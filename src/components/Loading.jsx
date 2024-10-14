import { Spinner } from 'flowbite-react'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center'>
        <Spinner className='text-westly mr-2' size='xl'/>
        <span className='text-westly'>Loading...</span>
    </div>
  )
}
