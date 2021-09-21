import React from 'react';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel  
     control={<Checkbox 
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon />}
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

      </header>
    
      </div>
  );
}

export default App;
