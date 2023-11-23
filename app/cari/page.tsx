"use client"
import {useState } from 'react';
import SectionResult from './[slug]/sectionResult';

export default function Page() {

  const [query, setQuery] = useState('');


  const onSearch=(e:any)=>{
    e.preventDefault()
    const inputQuery = e.target[0].value;

    setQuery(inputQuery)
  }



  return (
    <div>
        <form onSubmit={onSearch}>
            <input placeholder='cari user di GitHub' />
            <button>Cari orang</button>
        </form>
       {query && < SectionResult query={query} />}
    </div>
  )
}
