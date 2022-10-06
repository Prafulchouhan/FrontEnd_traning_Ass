import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import Table from './Table';

export default function Click({sortAge,sortName}) {
  return (
    <div id='one'>
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      >
      <Button onClick={()=>{sortAge()}}>Age</Button>
      <Button onClick={()=>{sortName()}}>Name</Button>
    </ButtonGroup>
    </div>
  );
}