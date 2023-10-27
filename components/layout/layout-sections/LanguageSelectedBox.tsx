"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const languages = [
    { id: 1, flag: "fi fi-us", route: "/en" },
    { id: 2, flag: "fi fi-ir", route: "/fa" },
]

const LanguageSelectBox = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='flex flex-col justify-center items-center w-fit relative z-30'>
                <div onClick={() => setOpen((prev) => !prev)} className='p-2 cursor-pointer'>
                    <span className='p-1 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.175-.087a.5.5 0 01.224-.053h.146a.5.5 0 01.447.724l-.028.055a.4.4 0 01-.357.221h-.502a2.26 2.26 0 00-1.88 1.006l-.044.066a2.099 2.099 0 001.085 3.156.58.58 0 01.397.547v1.05a1.175 1.175 0 002.093.734l1.611-2.014c.192-.24.296-.536.296-.842 0-.316.128-.624.353-.85a1.363 1.363 0 00.173-1.716l-.464-.696a.369.369 0 01.527-.499l.343.257c.316.237.738.275 1.091.098a.586.586 0 01.677.11l1.297 1.297z" clipRule="evenodd" />
                        </svg>

                    </span>
                </div>
                <div className={`flex flex-col bg-sky-100 w-16 my-2 rounded-lg ${open ? "opacity-100 h-auto" : "opacity-0 h-0"} transition-all duration-200 overflow-hidden absolute top-12 right-0`}>

                    {languages.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => { setOpen(false); }} className={`flex justify-center items-center p-2 hover:bg-sky-300 cursor-pointer `}>


                            <Link href={item.route}>
                                <span className={item.flag}></span>

                            </Link>
                        </div>
                    ))}

                </div>
            </div>
            <div
                onClick={() => setOpen(false)}
                className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? "block" : "hidden"}`}>
            </div>
        </>
    )
}

export default LanguageSelectBox