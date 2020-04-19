import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import { MenuItem } from '@material-ui/core';


function Nav(props){
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    

    return(
        <>
        <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick} >Navigation</Button>
        <Menu 
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
                <MenuItem onClick={handleClose}>Test</MenuItem>
                <MenuItem onClick={handleClose}>Test 2</MenuItem>
        </Menu>
        </>
    )
}
export default Nav

