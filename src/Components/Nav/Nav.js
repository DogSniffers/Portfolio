import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { makeStyles } from '@material-ui/core/styles'
import './Nav.css'

const styles = makeStyles({
    navBar:{
        backgroundColor:'#263238',

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
            <h1>Noah Van Buskirk</h1>
            <Button className={style.button}><AnchorLink href='#info' offset='160px'>Info</AnchorLink></Button>
            <Button className={style.button}><AnchorLink href='#skills' offset='130px'>Skills</AnchorLink></Button>
            <Button className={style.button}><AnchorLink href='#projects' offset='130px'>Projects</AnchorLink></Button>
            <Button className={style.button}><AnchorLink href='#contact'>Contact</AnchorLink></Button>
        </div>
    </AppBar>
      
      
  );
}
export default Nav
