import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import './Profile.css'



const Profile = () => {
const{user}=UserAuth()
  return (
   <div className='profileContainer'>
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
       
         <div className='profile'>
        <div className='profile_firstLetter'>
            {`${user?.displayName?.charAt(0)}`}
        </div>
        <div className='profile_displayName'>
            {`${user?.displayName}`}
        </div>
        <div className='profile_email'>
        @{`${user?.email?.substring(0,5)}`}
        </div>
        <div className='followers'>0 followers</div>
        <div className='followers'>0 following</div>
        <Link to='/'><button>Go back to home</button></Link>
    </div>
   </div>
        
  )
}

export default Profile