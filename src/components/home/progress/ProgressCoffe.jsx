import React from 'react'

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import '../../../styles/components/home/progress/_progressCoffe.scss';

export const ProgressCoffe = () => {
  return (
    <div className='mainProgressCoffeContainer'>

      <Stack
        sx={{ color: 'grey.500' }}
        spacing={2}
        direction="row">

        <CircularProgress
          className='progress'
          color="secondary"
          size='80px'
          sx={{ 
            display: 'block',
            // zIndex: (theme) => theme.zIndex.drawer + 100
           }} />

      </Stack>

    </div>
  )
}
