import Link from 'next/link'
import React from 'react'

export default function Post() {
    return (
        <div>
            <p>hello ini Pos</p>

            <div>
                <Link href={"post/create"} className='==='>create</Link>
                {[1,2,3,4,5,6,7,8,9,10].map((_,i)=>(
                    <div key={i} className='border rounded-md'>
                        <h1>Title</h1>
                        <p>Content</p>
                        <button className='text-xs text-red-500 hover:text-red-400'>Update</button>
                        <button className=''>Delete</button>
                    </div>
                ))}
              

            </div>
        </div>
    )
}
