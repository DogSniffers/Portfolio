import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
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
            <Button className={style.button}>Skills</Button>
            <Button className={style.button}>Projects</Button>
            <Button className={style.button}>Contact</Button>
        </div>
    </AppBar>
      
      
  );
}
export default Nav
