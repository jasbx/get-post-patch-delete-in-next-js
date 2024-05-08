"use client"

import { useEffect, useState } from "react";
import Create from "./Create/page";
import CreateBlogs from "./blogs/Create/page";
import Link from "next/link";

export default function Home() {
  const [data, setdata] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/api/get', {
      next: { revalidate: 5 }
    })
      .then(res => res.json())
      .then(res => {
        setdata(res)
      })
  }, [])
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/blogs/get', {
      next: { revalidate: 5 }
    })
      .then(res => res.json())
      .then(res => {
        setBlogs(res)
      })
  }, [])
  return (
    <div>

      {/* <h1>A Fancy Table</h1>

      <table id="customers">
        <tr>
          <th>UserName</th>
          <th>Email</th>
          <th>Password</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {data.map((item: any) => (
          <tr>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td> <i className="fa-solid fa-trash" style={{ color: '#f9230b' }}></i></td>
            <td><i className="fa-solid fa-plus" style={{ color: '#8df2a6' }}></i></td>
          </tr>
        ))}
      </table> */}
<h1>
  Blogs Table
</h1>
      <table id="customers">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {blogs.map((item: any) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.desc}</td>
       
            <td> <i className="fa-solid fa-trash" style={{ color: '#f9230b' }}></i></td>
            <td><i className="fa-solid fa-plus" style={{ color: '#8df2a6' }}></i></td>
            
            <Link href={`blogs/blog/myblog/${item.id}`}>
            <td>
            <i className="fa-solid fa-eye"></i>
            </td>
            </Link>
              
              
          </tr>
        ))}
      </table>
      {/* <Create /> */}
      <CreateBlogs/>
    </div>
  );
}
