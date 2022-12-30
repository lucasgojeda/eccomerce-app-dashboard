import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// import '../../../../styles/components/records/modals/components/_tabNavRecordModal.scss';


export const TabNavRecordModal = ({ setProductUpdate, productUpdate }) => {

  const handleChange = (event, newValue) => {
    setProductUpdate(newValue);
  };

  return (
    <Box className='mainTavNavRecordContainer'>
      <Tabs
        onChange={handleChange}
        value={productUpdate}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="Before" />
        <Tab label="After" />
      </Tabs>
    </Box>
  );
}
