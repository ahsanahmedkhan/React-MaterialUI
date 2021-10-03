import React from 'react';
import './App.css';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
  
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
//typography for fonts
import {cyan, lightBlue } from '@material-ui/core/colors';
import 'fontsource-roboto';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu }  from '@material-ui/icons';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg,#324ea8,#a83250)',
    border: 0,
    marginTop: 15,
    borderRadius: 5,
    color: 'white',
    padding: '10px 68px'
  }
})

const theme = createTheme({
  typography:{
    h3: {
      fontSize: 36,
      marginBottom: 10,
    }
  },
 
  palette:{
    primary:{
      main: cyan[800], 
    }, 
    secondary:{
      main: lightBlue[600],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button onClick={(e) => alert('hello')} className={classes.root}>submit</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel  
     control={<Checkbox 
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<DeleteIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label':'primary checked',
          color:'primary'  
        }}
      />}
      label="Testing Checkbox"
    />
  
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">

    <header className="App-header">
    <AppBar color="transparent">
      <Toolbar>
        <IconButton>
          <Menu color="secondary"  />
        </IconButton>
        <Typography variant="h6">
            Material UI AppBar
        </Typography>
        <Button variant="text" color="secondary">
          Login
        </Button>
      </Toolbar>
    </AppBar>

    <Typography variant="h3">Welcome to MUI</Typography>
    <Typography variant="subtitle1">Learn How to use Material UI</Typography>
    
    <TextField variant="filled" label="First Name" placeholder="Ahsan" color="primary" />
    <br />
    <TextField variant="standard" label="Last Name" placeholder="Khan" color="primary" />
    <br />
    <TextField variant="outlined" label="Email" type="email" placeholder="bdoahsan@gmail.com" color="primary" />
      <CheckboxExample color="primary" />
      
      <ButtonGroup variant="contained" color="secondary">
          <Button
            startIcon={<SaveIcon />} size="small" href="#" variant="contained" color="secondary">
              Save
          </Button>

          <Button
            startIcon={<DeleteIcon />} size="small" href="#" variant="contained" color="secondary">
              Discard
          </Button>    
      </ButtonGroup>
      <ButtonStyled />
      </header>
      </div>
      </ThemeProvider>
  );
}

export default App;
