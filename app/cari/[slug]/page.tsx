import React from 'react'
import { json } from 'stream/consumers'

async function getData(param:string) {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
  
}

export default async function DetailCari({params}:{params:{slug:string}}) {
  const data = await getData(params.slug)
  return (
    <div>
      <p>detail User : {params.slug} </p>
      <div>
        {/* {JSON.stringify(data)} */}
        <li>{data.login}</li>
        <li>{data.id}</li>
        <li>{data.url}</li>
        <li>{data.created_at}</li>
      </div>
      </div>
  )
}
