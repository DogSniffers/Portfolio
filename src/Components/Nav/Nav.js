import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from '@material-ui/core/styles'
import './Nav.css'

const styles = makeStyles({
    navBar:{
        // backgroundColor:'#263238',
        // backgroundImage:'linear-gradient(to right,#455a64 black)',
        backgroundImage:'linear-gradient(to bottom right, #263238, #212121)',
        borderBottom:'black 3px groove'
    },
    button:{
        color:'#212121',
        backgroundColor:'#424242',
        border:'2',
        width:'14vh',
        padding:'5px',
        margin:'5px',
        '&:hover':{
            backgroundColor:'#616161'
        }
    }
})

 function Nav() {
     const style = styles()

     const handleNavigate = (test) => {
         const boof = document.getElementById(test)
         boof.scrollIntoView({})

     }
  return (
    <AppBar className={style.navBar}>
        <div>
            <h1 className='name'>Noah Van Buskirk</h1>
            <AnchorLink href='#info' offset='130px'><Button className={style.button}>Info</Button></AnchorLink>
            <AnchorLink href='#skills' offset='130px'><Button className={style.button}>Skills</Button></AnchorLink>
            <AnchorLink href='#projects' offset='130px'><Button className={style.button}>Projects</Button></AnchorLink>
            <AnchorLink href='#contact'><Button className={style.button}>Contact</Button></AnchorLink>
        </div>
    </AppBar>
      
      
  );
}
export default Nav
