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
      <p className='salary'>Estimated Salary: {`${minJdSalary ? minJdSalary: 0} ${salaryCurrencyCode} - ${maxJdSalary ? maxJdSalary: 0} ${salaryCurrencyCode}`}</p>
      <p className='about-company'>About Company:</p>
      <p className='about-us'>About us</p>
      <p className='about'>{jobDetailsFromCompany}</p>
      <p className='salary'>Experience: {minExp? minExp:0} years - {maxExp? maxExp:0} years</p>
      <Button variant="contained" sx={{textTransform:'none', width:'90%', alignSelf:'center', mt:1
      }}>Apply</Button>
    </div>
  )
}
