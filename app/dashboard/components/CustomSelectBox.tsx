"use client"
import React, { useState } from 'react'

const cities = [
    "semarang",
    "jakarta",
    "surabaya",
    "malang",
    "pati"
]

const CustomSelectBox = () => {
    const [selectedCity, setselectedCity] = useState("semarang");
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='bg-gray-100 flex flex-col justify-center items-center w-fit relative z-30'>
                <div onClick={() => setOpen((prev) => !prev)} className='flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer'>
                    <span>{selectedCity}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className={`flex flex-col bg-white w-48 my-2 rounded-lg ${open ? "opacity-100 h-auto" : "opacity-0 h-0"} transition-all duration-200 overflow-hidden absolute top-16 left-0`}>
                    {
                        cities.map(item => (
                            <div key={item} onClick={() => { setselectedCity(item); setOpen(false); }} className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer ${selectedCity === item ? "bg-orange-100" : ""} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-orange-500 ${selectedCity === item ? "block" : "opacity-0"} `}>
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                onClick={() => setOpen(false)}
                className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? "block":"hidden"}`}>
            </div>
        </>
    )
}

export default CustomSelectBox