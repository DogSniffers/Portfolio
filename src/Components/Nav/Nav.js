import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './Nav.css'

const buttonStyles = makeStyles({
    root:{
        color:'#212121',
        backgroundColor:'#424242',
        border:'2',
        '&:hover':{
            backgroundColor:'#616161'
        }
    }
})

 function Nav() {
     const button = buttonStyles()

     const handleNavigate = (test) => {
         const boof = document.getElementById(test)
         boof.scrollIntoView({})

     }
  return (
    <div className='navbar'>
        <h1>Navigation</h1>
        <Button className={button.root}>Skills</Button>
        <Button className={button.root}>Projects</Button>
        <Button className={button.root}>Contact</Button>
      
      
    </div>
  );
}
export default Nav
