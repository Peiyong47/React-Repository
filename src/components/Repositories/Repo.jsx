import React from 'react'
import { FaCodeBranch, FaRegEye, FaStar } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa6'
export default function Repo({repo}) {
  return (
    <div 
      className='flex gap-3 p-4 rounded-xl shadow-lg' 
    >
      <span className='flex items-center justify-center w-7 h-7 bg-westly-200 rounded-full p-2'>
        <FaCodeBranch className='text-westly-600' />
      </span>
      <div className='flex flex-col gap-1 text-westly-600'>
        <div className='flex flex-col sm:flex-row gap-2'>
          <a href={repo.html_url} target='_blank' rel='noreferrer' className='font-semibold hover:text-westly-200 hover:underline'>
            {repo.name}
          </a>
          <div className='flex flex-wrap items-center gap-2'>
            <div className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
              <FaStar /> {repo.stargazers_count}
            </div>
            <div className='bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
              <FaCodeFork /> {repo.forks_count}
            </div>
            <div className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
              <FaRegEye /> {repo.watchers_count}
            </div>
          </div> 
        </div> 
        <p className='text-sm text-westly-600'>{repo.description}</p>
        <div className='italic text-indigo-800 text-xs'>
          <span className='font-medium'>Language: </span> {repo.language? repo.language : '-'}
        </div>
      </div>                                
    </div>
  )
}
