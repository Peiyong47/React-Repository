import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo_colour from '../assets/logo_colour.png'
import NavItem from './NavItem'

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
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/repositories'>Repositories</NavItem>
                </div>
            </div>
            <Navbar.Collapse className='md:hidden'>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/repositories'>Repositories</NavItem> 
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
