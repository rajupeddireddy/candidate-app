import { Box } from '@mui/material'
import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav-ele'>
      <div className="bubble-holder">
        <button class="woot-widget-bubble woot-elements--right" title="Open chat window" style={{background: 'rgb(85, 239, 196)', right: '380px', borderRadius:'50%',padding:'6px 8px 6px 8px', border:'1px solid transparent'}}>
          <svg id="woot-widget-bubble-icon" width="24" height="24" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z" fill="#FFFFFF"></path></svg>
            </button>
          <span class="woot--notification"></span>
      </div>
    </nav>
  )
}
