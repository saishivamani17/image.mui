import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function TextRating() {
  const value = 4.5;

  return (
    <div> 
      <Box
        sx={{
          width: 300,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bottom: '97rem', // Adjust this for the position
          left: '10rem',
        }}      
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>
          {labels[value]}
        </Box>
      </Box>

      {/* Second Rating Box (optional) */}
      <Box
        sx={{
          width: 300,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bottom: '98rem', // Adjust this for different positioning
          left: '45rem',  // Adjust the left position
        }}
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>
          {labels[value]}
        </Box>
      </Box>

      {/* Third Rating Box (optional) */}
      <Box
        sx={{
          width: 300,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bottom: '100rem',
          left: '80rem',
        }}
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>
          {labels[value]}
        </Box>
      </Box>
    </div>
  );
}