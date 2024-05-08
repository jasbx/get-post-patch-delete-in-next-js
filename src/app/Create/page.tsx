"use client"
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

const Create = () => {
  const [username, setName] = useState('')
  const [email, setE] = useState('')
  const [password, setP] = useState('')

  const Hsubmit = (e: FormEvent) => {
    e.preventDefault()
    const users = {
      username: username,
      email: email,
      password: password
    }


    fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    })
    if (email === "") return toast.error("sorry you cant  send 😭")
    if (username === "") return toast.error("sorry you cant  send 😭")
    if (password === "") return toast.error("sorry you cant  send 😭")
    toast.success("your data has been sent 🤤")
  }

  return (
    <div>
      <h1>
        Form Create
      </h1>
      <form onSubmit={Hsubmit}>
        <input type="text" placeholder='enter name' required onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='enter email' required onChange={(e) => setE(e.target.value)} />
        <input type="text" placeholder='enter password' required onChange={(e) => setP(e.target.value)} />

        <button type="submit" className='btn' >submit</button>
      </form>
    </div>
  )
}

export default Create
