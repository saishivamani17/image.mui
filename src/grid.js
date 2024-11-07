import * as React from 'react';
import Button from '@mui/material/Button';
import  Stack  from '@mui/material/Stack';

export default function Grid() {
    return (
      <div>
       
        <img
          src="spiderman.jpg"
          alt="Spider-man"
          style={{
            width: '20rem',
            height: '25rem',
            backgroundColor: 'black',
            position: 'relative',
            top: '5rem',
            right: '-5rem',
            display: 'block',
          }}
        />
  
        
        <img
          src="og.jpg"
          alt="og"
          style={{
            width: '20rem',
            height: '25rem',
            backgroundColor: 'black',
            position: 'relative',
            bottom: '20rem',
            right: '-40rem',
            display: 'block',
          }}
        />

<img
          src="salaar.jpg"
          alt="salaar"
          style={{
            width: '20rem',
            height: '25rem',
            backgroundColor: 'black',
            position: 'relative',
            bottom: '45rem',
            right: '-75rem',
            display: 'block',
          }}
          />



      </div>
    );
  }
  