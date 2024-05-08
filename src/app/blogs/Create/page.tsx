"use client"
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

const CreateBlogs = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')


  const Hsubmit = (e: FormEvent) => {
    e.preventDefault()
    const bolgs = {
      title: title,
      desc: desc,
   
    }


    fetch('http://localhost:3000/blogs/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bolgs)
    })
    if (title === "") return toast.error("sorry you cant  send 😭")
    if (desc === "") return toast.error("sorry you cant  send 😭")
   
    toast.success("your data has been sent 🤤")
  }

  return (
    <div>
      <h1>
        Form Create Blogs
      </h1>
      <form onSubmit={Hsubmit}>
        <input type="text" placeholder='enter title' required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='enter desc' required onChange={(e) => setDesc(e.target.value)} />
    

        <button type="submit" className='btn' >submit</button>
      </form>
    </div>
  )
}

export default CreateBlogs
