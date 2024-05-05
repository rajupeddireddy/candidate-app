import React from 'react'
import './SearchJobs.css'
import AutoComplete from '../AutoComplete/AutoComplete'
import Jobs from '../Jobs/Jobs'

export default function SearchJobs() {
  return (
    <div className='sj-container'>
      <span className='span-ele'>Search Jobs</span>
      <div className='filter-fields-card'>
        <AutoComplete label='Role'/>
        <AutoComplete label='Number Of Employees'/>
        <AutoComplete label='Experience'/>
        <AutoComplete label='Remote'/>
        <AutoComplete label='Minimum Base Pay Salary'/>
      </div>
      <Jobs/>
    </div>
  )
}
