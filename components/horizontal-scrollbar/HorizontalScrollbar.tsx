"use client"
import React from 'react'

const HorizontalScrollbar = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='flex overflow-x-auto items-center space-x-2 p-4 border-gray-300 border-2 my-4 '>
          {children}
        </div>
    )
}

export default HorizontalScrollbar