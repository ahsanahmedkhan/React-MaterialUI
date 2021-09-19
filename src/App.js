import './App.css';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button
      startIcon={<SaveIcon />}
      size="small" href="#" variant="contained" color="secondary">
      Save
      </Button>
        
       
      </header>
    </div>
  );
}

export default App;
