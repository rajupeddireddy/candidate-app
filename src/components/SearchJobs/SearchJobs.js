import React from 'react'
import './SearchJobs.css'

import Jobs from '../Jobs/Jobs'

export default function SearchJobs() {

  return (
    <div className='sj-container'>
      <span className='span-ele'>Search Jobs</span> 
      <Jobs/>
    </div>
  )
}
