
import Link from 'next/link'
import React from 'react'
import Item from './item'

const getPosts = async () => {
    const res = await fetch(process.env.BASE_URL+'/api/post',{next:{revalidate: 0}})
    const json = await res.json()
    return json
}

const Page = async()=> {

    const posts = await getPosts()
    return (
        <div className="bg-white rounded-lg mx-4 p-4">
            <p>hello ini Pos</p>

            <div className='w-[1000px] mx-auto pt-20'>
                <Link href={"post/create"} className='px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>create</Link>
             
                {posts?.posts?.map((post:any,index:number)=>(
                    <Item key={index} post={post} />
                  
                ))}
            </div>
        </div>
    )
}

export default Page
