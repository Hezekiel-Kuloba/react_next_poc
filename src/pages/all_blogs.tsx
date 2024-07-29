import React from 'react'
import { GetAllBlogs } from '../services/blogs/get_all_blogs'
import { SearchBlog } from '../components/searchBlog'
import { NavBar } from '../components/navbar'
import { Footer } from '../components/footer'

export const Blogs = () => {
  return (
    <div>
      <NavBar/>
      <SearchBlog/>
      <GetAllBlogs/>
      <Footer/>
    </div>
  )
}
