import { FaGithub, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='bg-gradient-to-r from-darkBlue-400 via-westly-600 to-westly '>
        <div className='max-w-6xl mx-auto py-24'>
            <div className='flex gap-5 flex-col sm:flex-row justify-center items-center text-center sm:text-justify'>
                <FaReact className='text-8xl md:text-9xl text-[#61DAFB] flex-shrink-0' />
                <div className='flex flex-col gap-4 justify-center'>
                    <span className='text-xl md:text-3xl font-bold text-westly-100'>React Community</span>
                    <div className='flex text-westly-100 gap-2 items-center'>
                        <span className='text-sm md:text-base'>Open Source React Repositories</span>
                        <FaGithub className='items-center text-xl md:text-2xl flex-shrink-0' />
                    </div>
                </div> 
            </div>
            <div className='flex justify-center mt-10 gap-6 flex-col md:flex-row items-center text-center mx-10'>
                <Link to='/reactjs' className='px-4 py-2 bg-westly-200 rounded-full text-westly-600 hover:bg-opacity-60 font-semibold w-full sm:max-w-[240px] text-xl'>
                    Explore Repositories
                </Link>
                <Link to='https://react.dev/' target='_blank' rel='noreferrer' className='px-4 py-2 bg-transparent border border-westly-200 rounded-full text-westly-200 font-semibold w-full sm:max-w-[240px] text-xl hover:text-opacity-60 hover:border-opacity-60'>
                    Learn React
                </Link>
            </div>
        </div>
    </section> 
  )
}
