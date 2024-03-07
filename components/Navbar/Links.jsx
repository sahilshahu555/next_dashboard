"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";

const Links = () => {
    const pathName= usePathname();
    const navLinks=[
        {
            title:"Home",
            path:"/"
        },
        {
          title:"Blogs",
          path:"/blog"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        
    ]

//temp
    const session=true;
    const isAdmin=true;

  return (
    <div className='flex flex-col lg:flex-row gap-5 md:gap-10 items-center'>
      {navLinks.map((elm,i)=>(
        <Link key={i} href={elm.path} className={`${pathName === elm.path && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer hover:scale-95`}>
          {elm.title}
        </Link>
            ))}

      {session ?(
        <>
        {isAdmin && <Link href="/admin" className={`${pathName === "/admin" && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer hover:scale-95`}>Admin</Link>}
        <button className="py-1 px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Logout</button>
        </>
      ):(
        <div><Link href="/login" className="py-1  px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Login</Link></div>
      )}


    </div>
  )
}

export default Links
