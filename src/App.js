import React from 'react';
import './App.css';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';

import { blue, cyan, orange, pink, red } from '@material-ui/core/colors';

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
  palette:{
    primary:{
      main: cyan[800],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>submit</Button>
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
    <Typography variant="h6">Education is the basic need of humanity</Typography>
    <Typography variant="h4">Fill The Form</Typography>
    
    <TextField variant="outlined" label="First Name" placeholder="Ahsan" color="primary" />
    <br />
    <TextField variant="outlined" label="Last Name" placeholder="Khan" color="primary" />
    <br />
    <TextField variant="outlined" label="Email" type="email" placeholder="bdoahsan@gmail.com" color="primary" />
      <CheckboxExample color="primary" />
      
      <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />} size="small" href="#" variant="contained" color="primary">
              Save
          </Button>

          <Button
            startIcon={<DeleteIcon />} size="small" href="#" variant="contained" color="primary">
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
