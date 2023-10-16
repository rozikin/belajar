"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function create() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e:any) =>{
    e.preventDefault()

    setIsLoading(true)

    await fetch("../api/post",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        title,content
      })
    }).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })

    setIsLoading(false)
    router.push('/post')
    router.refresh()
  }



  return (
    <div>
      <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='masukan judul' value={title} onChange={(e)=>  setTitle(e.target.value)} className='w-full border p-2 rounded-md' />
        <input type="text" placeholder='masukan konten' value={content} onChange={(e)=> setContent(e.target.value)} className='w-full border p-2 rounded-md' />
        <button disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
      </form>
    </div>
  )
}
