import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';



const Search = () => {
    const[searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('searched/' + searchTerm)
        setSearchTerm('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            className='searchbar-search'
            type="text" 
            placeholder='Search any keyword corresponding to your image need'
            onChange={(e)=>setSearchTerm(e.target.value)}
            value={searchTerm}
            />
        </form>
    </div>
  )
}

export default Search;