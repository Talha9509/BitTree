"use client"
import Image from "next/image";
import { useState } from "react";
import {useRouter} from 'next/navigation'

export default function Home() {
  const [text,setText]=useState("")
  const router=useRouter()

  const createTree=()=>{
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] md:min-h-[150vh] min-h-[86vh] 2xl:min-h-[80vh] md:grid md:grid-cols-2">
        <div className=" flex items-start justify-center flex-col ml-[5vw] gap-4 md:p-0 p-4">
          <p className="text-[#d2e823] font-bold md:text-7xl text-4xl 2xl:text-8xl  ">Everything you are. In one, simple link in bio.</p>
          <p className="text-white text-lg font-semibold">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex md:flex-row flex-col gap-3 my-5">
            <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Enter your handle" className="bg-white p-4 px-6 rounded-xl pl-3 font-semibold" />
            <button onClick={()=>createTree()} className="bg-[#e9c0e9] p-4 px-6 rounded-full text-[#1e2330] font-semibold">Claim your BitTree</button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center flex-col mr-[5vw]">
           <Image loading="eager" src="/home2.png" alt="home" width={800} height={200}></Image>
        </div>
      </section>
    
    </main>
  );
}
