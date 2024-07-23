import React from 'react';
import './NavBar.css';
import { useState } from 'react';

function Nav() {
    let [status, setStatus] = useState(false);
    return (
       
       
       <>
      <div className='maiDiv'>
      <button className='micon' onClick={()=> setStatus(!status)}>

{status ? <span>&times;</span> : <span>&#9776;</span> }
</button>
<b>QuickWeather</b>
        <div className= {`hide ${status ? 'Active' : ""}`}>
           
          <ul >
           
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
           
          </ul>
        </div>
      </div>
    
       
       </>
    );
}

export default Nav;

