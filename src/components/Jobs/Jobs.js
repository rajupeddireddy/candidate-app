import React, { useState, useEffect, useRef } from 'react';
import JobCard from '../JobCard/Card';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import './Jobs.css';

export default function Jobs() {
    const [jobList, setJobList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1); // Initial page number
    const [hasMore, setHasMore] = useState(true); // Track if there are more jobs to load
    const containerRef = useRef(null); // Ref to the container element
    const [totalJobs, setTotalJobs] = useState(0)

    const loadMoreJobs = () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": (page - 1) * 10 // Calculate offset based on page number
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                console.log(result);
                setJobList(prevJobs => [...prevJobs, ...result.jdList]); // Append new jobs to existing list
                setPage(prevPage => prevPage + 1); // Increment page number
                setIsLoading(false);
                setHasMore(result.jdList.length > 0); // Set hasMore based on whether there are more jobs
                setTotalJobs(result.totalCount)
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        loadMoreJobs(); // Load initial set of jobs
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                window.innerHeight + document.documentElement.scrollTop >= containerRef.current.offsetHeight &&
                !isLoading &&
                hasMore
            ) {
                loadMoreJobs();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, hasMore]);

    return (
        <>
         <p className='total-jobs'>Available Jobs: {totalJobs}</p>
         <div className='j-container' ref={containerRef}>
           
           {
               jobList.map(job => <JobCard job={job} key={job.jdUid}/>)
           }
           {isLoading &&   <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:"200px", width:'100%' }}>
                <CircularProgress  />
                </Box>
            }
       </div>
        </>
       
    );
}
