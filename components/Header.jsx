import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full py-3 fixed top-0 left-0 border-b'>
        <nav className='w-full h-[70px] grid grid-cols-12 px-[6%]'>
            <div className='col-span-12 h-full'>
                <ul className='h-full flex justify-center items-center'>
                    <li className='mr-10'>
                        <Link href='/'>ENGAGEMENT RINGS</Link>
                    </li>
                    <li className='mr-10'>
                        <Link href='/'>WEDDING RINGS</Link>
                    </li>
                    <li className='mr-10'>
                        <Link href='/'>DIAMONDS</Link>
                    </li>
                    <li className='mr-10'>
                        <Link href='/'>JEWELRY</Link>
                    </li>
                    <li>
                        <Link href='/'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
