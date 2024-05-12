import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex text-white bg-black top-0 sticky z-20'>
        <div className='w-1/2'>
            <h1 className='p-4 font-bold'>Xstream</h1>
        </div>
        <div className='flex justify-around items-center w-1/2 '>
            <Link href="/" className='hover:text-teal-300'>player</Link>
            <Link href="/List" className='hover:text-teal-300'>list</Link>
            <Link href="" className='hover:text-teal-300'>community</Link>
        </div>
    </div>
  )
}

export default Navbar