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
        <Button>Test 1</Button>
        <Button>Test 2</Button>
      
      
    </div>
  );
}
export default Nav
