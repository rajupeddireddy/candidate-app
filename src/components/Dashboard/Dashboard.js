import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import ReviewCard from '../ReviewCard/ReviewCard'
import SearchJobs from '../SearchJobs/SearchJobs'

export default function Dashboard() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Navbar/>   
        <ReviewCard/> 
        <SearchJobs/>
    </Box>
  )
}
