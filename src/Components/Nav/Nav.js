import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import './Nav.css'

 function Nav() {

     const handleNavigate = (test) => {
         const boof = document.getElementById(test)
         boof.scrollIntoView({})

     }
  return (
    <div className='navbar'>
        <h1>Navigation</h1>
        <Button>Skills</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      
      
    </div>
  );
}
export default Nav
