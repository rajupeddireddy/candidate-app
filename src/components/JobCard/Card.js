import React from 'react'
import { Button } from '@mui/material'
import './JobCard.css'

export default function JobCard(props) {
    const {job} = props
    const {jobRole, logoUrl, companyName, salaryCurrencyCode, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp,maxExp, location    } = job
  return (
    <div className='job-card' style={{border:'1px solid #bfbfbf',}}>
      <div className='company'>
        <img src={logoUrl}/>
        <div>
          <p className='company-name'>{companyName}</p>
          <p className='role'>{jobRole}</p>
          <p className='location'>{location}</p>
        </div>
      </div>
      <p className='salary'>Estimated Salary: {`${salaryCurrencyCode}${minJdSalary} - ${salaryCurrencyCode}${maxJdSalary}`}</p>
      <p>About Company:</p>
      <p>About us</p>
      <p className='about'>{jobDetailsFromCompany}</p>
      <p>Experience</p>
      <p>{minExp}years - {maxExp} years</p>
      <Button variant="contained" sx={{textTransform:'none'}}>Apply</Button>
    </div>
  )
}
