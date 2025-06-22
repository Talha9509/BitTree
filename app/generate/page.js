"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'

const page = () => {
  const searchParams = useSearchParams()

  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setlinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
          // If the current i is the one we’re editing (i == index), it returns a new object with updated link and linktext.
        }
        else {
          return item
          // Otherwise, it returns the original item.
        }
      })
    })
  }

  const addLink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "links": links,
      "pic": pic,
      "desc":desc
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if (result.success) {
      toast.success(result.message)
      setlinks([{ link: "", linktext: "" }])
      setpic("")
      sethandle("")
      setdesc("")
    }
    else {
      toast.error(result.message)
    }

  }

  return (
    <div className='bg-[#E9C0E9] md:min-h-[120vh] min-h-[90vh] md:grid md:grid-cols-3 py-10 px-10 md:px-0'>
      <div className="col1 flex flex-col justify-end items-center md:col-span-2 md:py-24">
        <div className='flex flex-col gap-5 my-8'>
          <h1 className='font-bold md:text-4xl text-2xl'>Create your BitTree</h1>
          <div className="item">
            <h2 className='font-semibold md:text-2xl text-xl'>Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" className='bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Choose a handle' />
            </div></div>
          <div className="item">
            <h2 className='font-semibold  md:text-2xl text-xl'>Step 2: Add Links</h2>
            {links && links.map((item, index) => {
              return <div key={index} className="mx-4">
                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }}   className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link' />
              </div>

            })}
            <button onClick={() => addLink()} className='p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl  md:text-2xl text-md'>+ Add Link</button>
          </div>

          <div className="item">
            <h2 className='font-semibold  md:text-2xl text-xl'>Step 3: Add Picture and Description</h2>
            <div className="mx-4 flex flex-col">
              <input value={pic || ""} onChange={e => { setpic(e.target.value) }}  type="text" className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Enter link to your picture' />
              <input value={desc || ""} onChange={e => { setdesc(e.target.value) }}  type="text" className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Enter Description/Bio' />
              <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className='p-5 py-2 mx-2 bg-slate-950 text-white font-bold rounded-3xl w-fit my-5 disabled:bg-slate-700  md:text-2xl text-md'>Create your BitTree</button>
              {/* this is frontend validation and need to do in backend validation also */}
              {/* backend validation is important for security */}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden col2 md:block md:col-span-1 h-screen w-full bg-[#E9C0E9]">
        <img src="/generate.png" className='h-full object-contain' alt="login" />
      </div>

      <ToastContainer />

    </div>

  )
}

export default page
