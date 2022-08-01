import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import './Logout.css'

const Logout = () => {
    const{user,logOut}=UserAuth()
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try{
        await logOut()
        navigate('/signin')
        }catch(error){
            console.log(error)
        }
        
    }
  return (
    <div className='logoutpage'>
        Are you sure you want to logout?
        <button 
        onClick={handleLogout}
        style={{marginTop:'20px'}}>Yes</button>
        <Link to='/'><button style={{marginTop:'20px'}}>Go back Home</button></Link>
    </div>
  )
}



export default Logout