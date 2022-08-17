
export const imageCropDialog = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return imageCropDialog__smBox();

    case md:
      return imageCropDialog__mdBox();

    case lg:
      return imageCropDialog__lgBox();

    case xl:
      return imageCropDialog__xlBox();

    default:
      break;
  }
}


const imageCropDialog__xlBox = () => ({
    position: 'fixed',
    backgroundColor: '#000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    '& .button-area': {
      textAlign: 'center',
      margin: 'auto',
      marginBottom: '0.5%',
      Button: {
        marginLeft: '2.5%'
      }
    },

    '& .crop-container': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      bottom: '80px',
    },

    '& .controls': {
      position: 'fixed',
      bottom: '5%', 
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 110,
    },

    '& .controls-upper-area': {
      textAlign: 'center',
    },

    '& .slider': {
      width: '50%',
    }
});

const imageCropDialog__lgBox = () => ({
  position: 'fixed',
    backgroundColor: '#000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    '& .button-area': {
      textAlign: 'center',
      margin: 'auto',
      marginBottom: '0.5%',
      Button: {
        marginLeft: '2.5%'
      }
    },

    '& .crop-container': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      bottom: '80px',
    },

    '& .controls': {
      position: 'fixed',
      bottom: '5%', 
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 110,
    },

    '& .controls-upper-area': {
      textAlign: 'center',
    },

    '& .slider': {
      width: '50%',
    }
});

const imageCropDialog__mdBox = () => ({
  position: 'fixed',
    backgroundColor: '#000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    '& .button-area': {
      textAlign: 'center',
      margin: 'auto',
      marginBottom: '0.5%',
      Button: {
        marginLeft: '2.5%'
      }
    },

    '& .crop-container': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      bottom: '80px',
    },

    '& .controls': {
      position: 'fixed',
      bottom: '5%', 
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 110,
    },

    '& .controls-upper-area': {
      textAlign: 'center',
    },

    '& .slider': {
      width: '50%',
    }
});

const imageCropDialog__smBox = () => ({
  position: 'fixed',
    backgroundColor: '#000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    '& .button-area': {
      textAlign: 'center',
      margin: 'auto',
      marginBottom: '0.5%',
      Button: {
        marginLeft: '2.5%'
      }
    },

    '& .crop-container': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      bottom: '80px',
    },

    '& .controls': {
      position: 'fixed',
      bottom: '5%', 
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 110,
    },

    '& .controls-upper-area': {
      textAlign: 'center',
    },

    '& .slider': {
      width: '50%',
    }
});



