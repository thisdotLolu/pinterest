import React from 'react'
import './Nothing.css'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'

const Nothing = () => {
  return (
      <div>
          <Link 
          className='back_search'
          to='/'><ArrowBack
          className='back_search_icon'
          style={{marginLeft:'15px',position:'fixed'}}
          sx={{fontSize:40}}
          /></Link>
        <div className='logo_profile'>
       <img src='https://www.freepnglogos.com/uploads/pinterest-logo-emblem-png-11.png'
        alt='pinterest logo'
        className='logo'
        />
       </div>
        <div className='nothing'>
        
       <p>Nothing to see here-yet</p> 
        <Link to='/'><button>Go back to Home</button></Link>
    </div>
      </div>
    

  )
}

export default Nothing