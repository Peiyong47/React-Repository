import { Button, Navbar, Tooltip } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaReact } from 'react-icons/fa'
import { MdExplore } from 'react-icons/md'

export default function Header() {
  return (
    <div className='bg-darkBlue-400 py-2 shadow-lg w-full sticky top-0 left-0 right-0 z-50'>
        <Navbar className='max-w-screen-xl bg-darkBlue-400 mx-auto text-westly-100 '>
            <Navbar.Toggle className='text-westly-100 hover:bg-westly-200 hover:bg-opacity-10' />
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold flex-row text-westly-100'>
                <FaReact className='inline-block mr-2 text-3xl sm:text-4xl items-center ' />
                    Repo
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
            <Navbar.Collapse className='md:hidden'>
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
