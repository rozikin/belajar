import React from 'react'
import { json } from 'stream/consumers'
import { Suspense } from 'react';
import RepoList from './sectionRepository';

async function getDataUsers(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()

}


export default async function DetailCari({ params }: { params: { slug: string } }) {
  const dataUser = await getDataUsers(params.slug)
  
  return (
    <div>
      <p>detail User : {params.slug} </p>
      <div>
        {/* {JSON.stringify(data)} */}
        <li>{dataUser.login}</li>
        <li>{dataUser.id}</li>
        <li>{dataUser.url}</li>
        <li>{dataUser.created_at}</li>

        <Suspense fallback={<div>loading ...</div>}>
          {/* "ts-ignore*/}
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  )
}
