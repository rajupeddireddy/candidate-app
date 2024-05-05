import React from 'react'
import { useState, useEffect } from 'react'
import JobCard from '../JobCard/Card'
import './Jobs.css'

export default function Jobs() {
    const [jobList, setJobList] = useState([])
    

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
        
        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
   
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                console.log(result)
                setJobList(result.jdList)
            } )
            .catch((error) => console.error(error));
    }, [])


    return (
        <div className='j-container'>
         {
            jobList.map(job => <JobCard job={job} key={job.jdUid}/>)
         }
        </div>
    )
}
