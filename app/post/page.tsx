import Link from 'next/link'
import React from 'react'

const getPosts = async () => {
    const res = await fetch(process.env.BASE_URL='/api/post')
    const json = await res.json() as Post[]
    return json
}

const Post = async()=> {

    const posts = await getPosts()
    return (
        <div>
            <p>hello ini Pos</p>

            <div className='w-[1000px] mx-auto pt-20'>
                <Link href={"post/create"} className='px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>create</Link>
                {JSON.stringify(posts)}
                {[1,2,3,4,5,6,7,8,9,10].map((_,i)=>(
                    <div key={i} className='border rounded-md'>
                        <h1>Title</h1> 
                        <p>Content</p>
                        <button className='text-xs text-blue-500 hover:text-blue-400'>Update</button>
                        <button className='text-xs text-red-500 hover:text-red-400'>Delete</button>
                    </div>
                ))}
              

            </div>
        </div>
    )
}

export default Post
