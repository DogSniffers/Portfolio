import React from 'react'
import './Nav.css'

function Nav(){
    return(
        <div className='navbar'>
            <h1>Nav</h1>
            <div className='contactInfo'>
                <h2>Contact Me:</h2>
                <li><a href='mailto:noahvanbeezie@gmail.com'>Email</a></li>
            </div>
        </div>
    )
}
export default Nav