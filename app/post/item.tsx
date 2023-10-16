"use client"
import { Post } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    post: Post
}

const Item = ({post}: Props)=> {
    const router = useRouter()

    const handleDelete = async (id: number) => {
        await fetch('/api/post?id='+id,{
            method : "DELETE"
        })

        router.refresh()
    }



  return (
    <div className='border rounded-md'>
    <h2>ID: {post.id}</h2>
    <h1>{post.title}</h1> 
    <p>{post.content}</p>
    <button className='text-xs text-blue-500 hover:text-blue-400' onClick={()=>router.push(`/post/update/${post.id}`)}>Update</button>
    <button className='text-xs text-red-500 hover:text-red-400' onClick={()=>handleDelete(post.id)}>Delete</button>
</div>
  )
}


export default Item