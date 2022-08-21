import { useSelector } from 'react-redux';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import '../../../styles/components/ui/progress/_progress.scss';

export const ProgressBackdrop = () => {

  const { progressBackdrop } = useSelector(state => state.ui);


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Backdrop
      className='mainProgressContainer'
      open={progressBackdrop.status}
    >
      <CircularProgress color="inherit" size='80px' sx={{ display: 'block' }} />
    </Backdrop>
  );
}
