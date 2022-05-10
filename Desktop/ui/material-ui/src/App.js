
import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckBox from '@mui/icons-material/CheckBox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'





function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
    control={<CheckBox 
      checked={checked}
      icon={<DeleteIcon />}
      checkedIcon={<SaveIcon />}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
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
        <TextField 
        variant="outlined"
        color="secondary"
        type='date'
        label='The Date'
        />
        <CheckboxExample />
        <ButtonGroup>
        <Button 
         startIcon={<SaveIcon />}
         size='large'
        variant='contained'
        color='primary'>
          SAVE
          </Button>
          <Button 
         startIcon={<DeleteIcon />}
         size='large'
        variant='contained'
        color='secondary'>
          DISCARD
          </Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


export default App;
