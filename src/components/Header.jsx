import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo_colour from '../assets/logo_colour.png'

export default function Header() {
  return (
    <div className='bg-darkBlue-400 py-2 shadow-lg w-full sticky top-0 left-0 right-0 z-50'>
        <Navbar className='max-w-screen-xl bg-darkBlue-400 mx-auto text-westly-100 '>
            <Navbar.Toggle className='text-westly-100 hover:bg-westly-200 hover:bg-opacity-10' />
            <Link to='/' className='self-center flex flex-row items-center'>
                <img src={logo_colour} alt='React' className='w-10 sm:w-12 mr-1'/>
                <span className='flex flex-col text-westly-100'>
                    <span className='text-sm sm:text-base font-medium'>Repo</span>
                    <span className='text-xs sm:text-sm font-light justify-end flex'>Com</span>
                </span>           
            </Link>
            <div className='flex'>
                <div className='hidden md:flex md:gap-6'>
                    <NavLink to='/' className={({isActive}) => isActive ? 'font-semibold underline hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md' : 'hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md'}>
                        Home
                    </NavLink>
                    <NavLink to='/reactjs' className={({isActive}) => isActive ? 'font-semibold underline hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md' : 'hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md'}>
                        Repositories
                    </NavLink>
                </div>
            </div>
            <Navbar.Collapse className='md:hidden '>
                <NavLink to='/' className={({isActive}) => isActive ? 'font-semibold underline hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md' : 'hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md'}>
                    Home
                </NavLink>
                <NavLink to='/reactjs' className={({isActive}) => isActive ? 'font-semibold underline hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md' : 'hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md'}>
                    Repositories
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    </div>

  )
}
