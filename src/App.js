import React from 'react';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg,#324ea8,#a83250)',
    border: 0,
    marginTop: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0, 30px'
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Submit Form</Button>
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
          'aria-label':'primary checked'  
        }}
      />}
      label="Testing Checkbox"
    />
  
  )
}

function App() {
  return (
    <div className="App">
      
    <header className="App-header">
    
    <TextField variant="outlined" label="First Name" placeholder="Ahsan" color="primary" />
    <br />
    <TextField variant="outlined" label="Last Name" placeholder="Khan" color="secondary" />
      <CheckboxExample />
      
      <ButtonGroup variant="contained" color="primary">
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
  );
}

export default App;
