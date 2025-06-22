import React from 'react'
import Link from 'next/link'
import clientPromise from '@/lib/mongodb'
import {notFound} from 'next/navigation'

export default async function Page({ params }) {
  const { handle } = params
  const client = await clientPromise
  const db = client.db("BitTree")
  const collection = db.collection("links")

  const item=await collection.findOne({handle:handle})
  if(!item){
    return notFound()
  }
  
  return <div className='flex min-h-screen bg-purple-300 justify-center items-start py-10'>
    {item && <div className="photo flex justify-center flex-col items-center gap-4">
      <img className='w-24' src={item.pic} alt="pic" />
      <span className='font-bold text-xl'>@{item.handle}</span>
      <span className="desc w-80 text-center">{item.desc}</span>
      <div className="links">
        {item.links.map((item, index) => {
          return <Link key={index} href={item.link}><div className='bg-purple-100 shadow-lg flex justify-center rounded-md my-3 md:min-w-96 min-w-60 min-h-10 items-center ' >
            {item.linktext}
          </div></Link>
        })}
      </div>
    </div>}
  </div>
}
