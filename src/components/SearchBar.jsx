import { TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
  return (
    <form>
      <TextInput 
        placeholder='Search...' 
        type='text'
        rightIcon={AiOutlineSearch}
        className='hidden sm:inline'
      />
    </form>
  )
}
