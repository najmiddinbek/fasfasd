import React from 'react'
import AdminMainPage from "../../components/AdminMainPage"
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import ITPARK from "../../public/Logo_IT_Park_Uzbekistan.svg.png"

export default function page() {
    return (
        <>
            <div className='pb-4'>
                <Navbar />
                <AdminMainPage />
                <div className='flex mt-16 gap-1 justify-center items-center'>
                    <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi</h1>
                    <Image src={ITPARK} alt='Image' width={50} height={10} />
                </div>
            </div>
        </>
    )
}






