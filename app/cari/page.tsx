"use client"
import { React , useState } from 'react';
import SectionResult from './[slug]/SectionResult';

export default function page() {

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
