import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Click() {
  return (
  <div id='button'>
    <Button variant="contained"> <Link to="/Table">Click Me </Link> </Button>
  </div>)
}
