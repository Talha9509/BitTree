"use client"
import React,{useState} from 'react'
// import Ima from 'module'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'


const Navbar = () => {
  const pathname=usePathname()
  const showNavbar=["/","/generate"].includes(pathname)
  const [menuOpen, setMenuOpen] = useState(false)


  return ( <>{showNavbar && <nav className='relative bg-white md:w-[90vw] w-[70vw] md:fixed md:top-10 md:right-[4vw]       md:rounded-full md:p-3 p-1.5 pl-9 flex justify-between  '>
        <div className="logo flex gap-14 items-center">
          <Link href={"/"}>
          <Image loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="linktree" width={100} height={40} className="nav-desktop-logo"></Image></Link>
          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-8'>
            <Link href={"/generate"}><li>Products</li></Link>
            <Link href={"/"}><li>Templates</li></Link>
            <Link href={"/"}><li>Marketplace</li></Link>
            <Link href={"/"}><li>Learn</li></Link>
            <Link href={"/"}><li>Pricing</li></Link>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className='hidden md:flex gap-3'>
            <button className="login bg-gray-100 p-4 rounded-lg font-semibold">Log in</button>
            <button className="signup text-white bg-gray-800 rounded-full p-4 font-semibold px-5">Sign up free</button>
        </div>

        {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg flex flex-col items-start p-6 gap-4 md:hidden">
              <Link href={"/generate"} onClick={() => setMenuOpen(false)}><span>Products</span></Link>
              <Link href={"/"} onClick={() => setMenuOpen(false)}><span>Templates</span></Link>
              <Link href={"/"} onClick={() => setMenuOpen(false)}><span>Marketplace</span></Link>
              <Link href={"/"} onClick={() => setMenuOpen(false)}><span>Learn</span></Link>
              <Link href={"/"} onClick={() => setMenuOpen(false)}><span>Pricing</span></Link>
              <div className="flex flex-col gap-2 w-full">
                 <button className="login bg-gray-100 p-3 rounded-lg font-semibold w-full">Log in</button>
                <button className="signup text-white bg-gray-800 rounded-full p-3 font-semibold w-full">Sign up free</button>
              </div>
              </div>
               )}

    </nav>}
    </>
  )
}

export default Navbar
