import React from 'react'
import { Homebar } from '../components/homebar'
import { GetAllBlogs } from '../services/blogs/get_all_blogs'
import { StaticBlogs } from '../services/blogs/static_blogs'
import ChartExample from '../components/charts'
import { Container, Col, Row } from 'react-bootstrap'
import { NavBar } from '../components/navbar'
import { Footer } from '../components/footer'
import { useQuery, useQueryClient } from 'react-query'

export const Home = () => {
  const { data, isLoading, error } = useQuery<UserData>('user', {
    cacheTime: 20 * 1000, // Cache the user data for 1 hour (60 minutes)
  }); // Specify the type explicitly  const queryKey = 'mister';
  const user = data;

interface UserData {
  id: number; // Adjust the type of 'id' as needed (e.g., string, number)
  // Other properties (firstName, lastName, etc.) go here
}
  
  return (
    <div>
<NavBar/>
        <Homebar/>
        <StaticBlogs/>
        <ChartExample/>
        <Footer/>
    </div>
  )
}
