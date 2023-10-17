"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = ({params, }: {params:{id:string}})=> {
    
    const id = params.id
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()
  
    const handleSubmit = async (e:any) =>{
      e.preventDefault()
  
      await fetch("../../api/post",{
        method: "PUT",
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          title,content,id
        })
      }).then((res)=>{
        console.log(res);
      }).catch((e)=>{
        console.log(e);
      })

      router.push('/post')
      router.refresh()
    }

    useEffect(()=>{
        getData()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getData = async ()=>{
        const res = await fetch("../../api/post/"+id)
        const json = await res.json()

        console.log(json)

        if(!json){
            router.push('/404')
            return;
        }
        
        setTitle(json.post.title)
        setContent(json.post.content)
      
       

    }
  
  
    return (
    
        <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
          <input type="text" placeholder='masukan judul' value={title} onChange={(e)=>  setTitle(e.target.value)} className='w-full border p-2 rounded-md' />
          <input type="text" placeholder='masukan konten' value={content} onChange={(e)=> setContent(e.target.value)} className='w-full border p-2 rounded-md' />
          <button>update</button>
        </form>
      
    )
}


export default Page