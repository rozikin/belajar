"use client"
import React, { useContext } from 'react'
import MainHeader from './layout-sections/MainHeader'
import MainSidebar from './layout-sections/MainSidebar'
import { MenuContext } from '@/context/MenuContext'


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { open } = useContext(MenuContext);

    return (
        <div className="bg-green-200 min-h-screen">
           <MainSidebar />
            <div className={`${open ? "max-lg:blur-xl" : "blur-0"}`}>
                <MainHeader />
                <main className="lg:ml-[280px]">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout