import React from 'react';
import { Link } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';

const NotFound = () => {
    return (
    <>
        <div className='text-center flex flex-col gap-3 justify-center items-center min-h-screen p-3 bg-gradient-to-t from-blue-200 to to-blue-100'>
            <div className='flex gap-2 items-center'>
            <HiInformationCircle className='text-5xl text-center mx-auto text-red-700' />
            <h1 className='font-extrabold text-red-700 text-4xl md:text-5xl'>404</h1>
            </div>
            <h2 className='mb-8 text-2xl md:text-3xl text-darkBlue font-bold'>Page Not Found</h2>
            <p className='text-darkBlue-400 text-lg'>
                Sorry, the page you are looking for does not exist.
            </p>
            <div className='flex justify-center gap-4 w-full mt-4 '>
                <Link to='/' className='text-westly-600 font-bold underline text-xl hover:text-westly'>Go to Home</Link>
            </div> 
        </div>
    </>
  
  );
};

export default NotFound;
