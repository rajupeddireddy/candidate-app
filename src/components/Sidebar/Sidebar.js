import React from 'react'
import { Box, Typography } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='logo-container'>
        <img src='https://jobs.weekday.works/_next/static/media/logo.268caeb2.png' alt='logo' className='logo-image'/>
      </div>
     
      <ul>
        <p className='ul-heading'>LOOKING FOR A JOB</p>
        <li>
            <PermIdentityIcon/>
            <p>My Applied Jobs</p>
        </li>
        <li>
            <CurrencyRupeeIcon/>
            <p>Search Jobs</p>
        </li>
        <li>
            <SearchIcon/>
            <p>Search Salary</p>
        </li>
      </ul>
    </div>
  )
}
