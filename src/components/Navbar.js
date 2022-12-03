import React from 'react'

import {AppBar,Box, Toolbar, Typography, Button, IconButton, Tabs} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Typography component="h6">JobPlus+</Typography>
      </AppBar> 
    </Box>
  )
}