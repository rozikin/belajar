"use client"

import HorizontalScrollbar from '@/components/horizontal-scrollbar/HorizontalScrollbar';
import Image from 'next/image';
import React from 'react'

const categories = [
    "Musik",
    "Game",
    "Komedi",
    "Pendidikan",
    "Hiburan",
    "Berita",
    "Ilmu Pengetahuan dan Teknologi",
    "Gaya Hidup",
    "Olahraga",
    "Kesehatan dan Kebugaran",
    "Seni dan Kreativitas",
    "Film dan Animasi",
    "Rumah dan Dekorasi",
    "Hewan Peliharaan",
    "Kendaraan",
    "Wisata dan Petualangan",
    "Anak-anak dan Keluarga",
    "Teknologi Digital",
    "Gaya Hidup",
    "Belanja dan Ulasan Produk"
]

const users = new Array(20).fill(0).map((item, index) => {
    return {
        id: index,
        username: `U#${index}`,
        image: `https://i.pravatar.cc/150?img=${Math.random()*50}`,
    };
});

const HorizontalScrollbarPage = () => {
    console.log(users)
    return (
        <div className="bg-white rounded-lg mx-4 p-4">
            <h1>horizon page  </h1>
                <br />
                <br />
                <h1 className='text-blue-800 text-2x1'>Yutube Categories</h1>
                <HorizontalScrollbar>
                    {
                        categories.map((item, index) => (
                            <div key={index} className='border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer'>
                                <h1>{item}</h1>
                            </div>
                        ))
                    }


                </HorizontalScrollbar>

                <br />
                <br />
                <h1 className='text-blue-800 text-2x1'>Instagram stories</h1>

                <HorizontalScrollbar>
                    {users.map(item => 
                    <div key={item.id} className='shrink-0'> 
                        <Image src={item.image} alt={item.username} className='w-18 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200'/>

                    </div>)}
                </HorizontalScrollbar>


          
        </div>
    )
}

export default HorizontalScrollbarPage