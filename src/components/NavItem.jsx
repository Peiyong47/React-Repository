import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({to, children}) {
  return (
    <NavLink
      to={to}
      className={({isActive}) => `${isActive ? 'font-semibold underline' : ''} hover:bg-westly-200 p-2 hover:bg-opacity-10 hover:rounded-md`}
    >
      {children}
    </NavLink>
  )
}
