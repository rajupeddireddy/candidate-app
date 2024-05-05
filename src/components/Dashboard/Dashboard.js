import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import ReviewCard from '../ReviewCard/ReviewCard'
import SearchJobs from '../SearchJobs/SearchJobs'

export default function Dashboard() {
  return (
    <Box sx={{display:'flex', height:'100vh'}}>
      <Sidebar/> 
      <div style={{flexGrow:1}}>
        <Navbar/>    
        <ReviewCard/> 
        <SearchJobs/>
      </div>
     
    </Box>
  )
}
