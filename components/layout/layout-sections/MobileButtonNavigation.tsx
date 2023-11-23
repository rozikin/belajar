'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const NavButtonsList = [
    {
        id: 1,
        label: 'Home',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      ,
        path: '/'
    },
    {
        id: 2,
        label: 'Search',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        ,
        path: '/search'
    },
    {
        id: 3,
        label: 'Add',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      ,
        path: '/add'
    },
    {
        id: 4,
        label: 'Favourites',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
      ,
        path: '/favourites'
    },
    {
        id: 5,
        label: 'User Area',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        ,
        path: '/users'
    }
]

function MobileButtonNavigation() {

    const path = usePathname();

    console.log({ path });


    return (
        <div className='fixed bottom-0 left-0 right-0 w-full h-12 bg-white sm:hidden'>
            <div className='flex justify-around items-center h-12 gap-x-3 border-t-gray-200'>
                {NavButtonsList.map((item) => (
                    <Link
                        key={item.id}
                        href={item.path} className={`text-3xl ${path === item.path ? 'text-gray-800': 'text-gray-400'}`}>
                        {item.icon}
                    </Link>
                ))}

            </div>
        </div >
    )
}

export default MobileButtonNavigation