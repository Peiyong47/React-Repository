import React from 'react'
import { HiInformationCircle } from 'react-icons/hi'

export default function Error() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col mx-auto gap-3'>
            <HiInformationCircle className='text-5xl text-center mx-auto text-red-700' />
            <h1 className='text-red-700 font-extrabold text-3xl text-center'>Opps!</h1>
            <span className='text-red-700 font-semibold text-2xl'>Something went wrong! Please try again later.</span>
        </div>
    </div>
  )
}
