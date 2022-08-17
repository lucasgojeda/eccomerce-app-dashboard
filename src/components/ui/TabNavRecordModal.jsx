import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { styles__tabNavRecordModal } from '../../../styles/dashboard/ui/styles__tabNavRecordModal';

export const TabNavRecordModal = ({ setProductUpdate, productUpdate }) => {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  const handleChange = (event, newValue) => {
    setProductUpdate(newValue);
  };

  return (
    <Box sx={styles__tabNavRecordModal(sm, md, lg, xl)}>
      <Tabs
        onChange={handleChange}
        value={productUpdate}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="Antes" />
        <Tab label="Después" />
      </Tabs>
    </Box>
  );
}
