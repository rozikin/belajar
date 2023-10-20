"use client"
import { MenuContext } from '@/context/MenuContext'
import React,{useContext} from 'react'

const MainHeader = () => {
    const {toggle} = useContext(MenuContext);

    return (
        <div className="bg-blue-800 text-white flex justify-between items-center px-4 h-12 mb-4">OZ Brand
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer" onClick={toggle}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
        </div>

    )
}

export default MainHeader;