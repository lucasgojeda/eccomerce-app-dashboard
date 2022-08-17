
export const navigationMenuMovil = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return navigationMenuMovil__smBox();

    case md:
      return navigationMenuMovil__mdBox();

    case lg:
      return navigationMenuMovil__lgBox();

    case xl:
      return navigationMenuMovil__xlBox();

    default:
      break;
  }
}


const navigationMenuMovil__xlBox = () => ({
  '& #buttonNavigationContainer': {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    borderTop: '1px solid #B2B6B5',
    zIndex: (theme) => theme.zIndex.drawer + 1
  },
  '& #containerSubMenu': {
    position: 'absolute',
    right: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRadius: '2.5px 0 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  },
  '& #containerSubMenuBin': {
    position: 'absolute',
    left: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderRight: '1px solid gray',
    borderRadius: '0 2.5px 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  }
});

const navigationMenuMovil__lgBox = () => ({
  '& #buttonNavigationContainer': {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    borderTop: '1px solid #B2B6B5',
    zIndex: (theme) => theme.zIndex.drawer + 1
  },
  '& #containerSubMenu': {
    position: 'absolute',
    right: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRadius: '2.5px 0 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  },
  '& #containerSubMenuBin': {
    position: 'absolute',
    left: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderRight: '1px solid gray',
    borderRadius: '0 2.5px 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  }
});

const navigationMenuMovil__mdBox = () => ({
  '& #buttonNavigationContainer': {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    borderTop: '1px solid #B2B6B5',
    zIndex: (theme) => theme.zIndex.drawer + 1
  },
  '& #containerSubMenu': {
    position: 'absolute',
    right: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRadius: '2.5px 0 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  },
  '& #containerSubMenuBin': {
    position: 'absolute',
    left: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderRight: '1px solid gray',
    borderRadius: '0 2.5px 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  }
});

const navigationMenuMovil__smBox = () => ({
  '& #buttonNavigationContainer': {
    position: 'fixed',
    bottom: 0,
    height: '7.5vh',
    width: '100vw',
    borderTop: '1px solid #B2B6B5',
    zIndex: (theme) => theme.zIndex.drawer + 1
  },
  '& #containerSubMenu': {
    position: 'absolute',
    right: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRadius: '2.5px 0 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  },
  '& #containerSubMenuBin': {
    position: 'absolute',
    left: 0,
    bottom: '100%',
    backgroundColor: '#fff',
    width: '65px',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: '1px solid gray',
    borderRight: '1px solid gray',
    borderRadius: '0 2.5px 0 0',
    zIndex: 100,
    '& .MuiSvgIcon-root': {
    }
  }
});




