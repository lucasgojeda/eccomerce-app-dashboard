
export const loginPage = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return login__smBox();

    case md:
      return login__mdBox();

    case lg:
      return login__lgBox();

    case xl:
      return login__xlBox();

    default:
      break;
  }
}


const login__xlBox = () => ({
  '& #buttonHome': {
    position: 'absolute',
    color: 'gray',
    left: '1%',
    top: 0,
    top: 0,
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      fontSize: '30px',
    }
  },
  '& #loginContainer': {
    marginTop: '5vh',
    height: '75vh',
    textAlign: 'center',
    bgcolor: '#fff',
    borderRadius: '2px',
    '& #title': {
      fontSize: '25px',
      paddingTop: '3%',
      borderBottom: '1px solid #B2B6B5',
      marginLeft: '4%',
      marginRight: '4%',
      marginBottom: '2.5%',
      paddingBottom: '2.5%',
      visibility: 'visible'
    },
    '& #submitButton': {
      width: '25%',
      minWidth: '150px',
      margin: 'auto',
      marginLeft: '2%',
      marginBottom: '10%',
    },
    '& #container': {
      marginTop: '5%',

    },
    '& .MuiTextField-root': {
      width: '60%',
      margin: 'auto',
      display: 'flex',
      marginBottom: '5%'
    },
    '& .google-button': {
      width: '40%',
      display: 'block',
      margin: 'auto',
      marginTop: '2.5%',
      height: '7vh',
      minWidth: '160px',
      backgroundColor: '#fff',
      color: '#737373',
      borderWidth: 0,
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)',
      transitionProperty: 'background-color box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      padding: 0,
      transform: 'scale(1.4)',
      ':hover': {
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.2)',
        outline: 'none',
        transform: 'scale(1.4) skewX(-0.4deg)',
        cursor: 'pointer',
      },
      ':active': {
        outline: 'none',
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.3)',
        transitionDuration: '10ms',
      }
    },
    '& .google-button__icon': {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0px 0 8px 8px',
      marginTop: '5px',
      width: '18px',
      height: '18px',
      boxSizing: 'border-box',
    },
    '& .Link': {
      display: 'block',
      marginTop: '7.5%',
    },
  },
  '& #fastLoginRoles': {
    height: '15vh',
    backgroundColor: '#1ABC9C',
    width: '100%',
    margin: 0,
    padding: 0,
    h1: {
      display: 'block',
      color: '#fff',
      height: '5vh',
      width: '100%',
      paddingTop: '1.25vh',
      marginBottom: '1.25vh',
      textAlign: 'center',
      fontSize: '20px',
      visibility: 'visible'
    },
    '& #user': {
      ':hover': {
        backgroundColor: '#76448A',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #moderator': {
      ':hover': {
        backgroundColor: '#000080',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #admin': {
      ':hover': {
        backgroundColor: '#D61E53',
        transition: 'all 0.5s ease-out'
      }
    },
    '& .button': {
      borderRadius: '2.5px',

      height: '5vh',
      width: '33%',
      color: '#fff',
    },
  }
});

const login__lgBox = () => ({
  '& #buttonHome': {
    position: 'absolute',
    color: 'gray',
    left: '1%',
    top: 0,
    top: 0,
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      fontSize: '30px',
    }
  },
  '& #loginContainer': {
    marginTop: '5vh',
    height: '75vh',
    textAlign: 'center',
    bgcolor: '#fff',
    borderRadius: '2px',
    '& #title': {
      fontSize: '25px',
      paddingTop: '3%',
      borderBottom: '1px solid #B2B6B5',
      marginLeft: '4%',
      marginRight: '4%',
      marginBottom: '2.5%',
      paddingBottom: '2.5%',
      visibility: 'visible'
    },
    '& #submitButton': {
      width: '25%',
      minWidth: '150px',
      margin: 'auto',
      marginLeft: '2%',
      marginBottom: '10%',
    },
    '& #container': {
      marginTop: '5%',

    },
    '& .MuiTextField-root': {
      width: '60%',
      margin: 'auto',
      display: 'flex',
      marginBottom: '5%'
    },
    '& .google-button': {
      width: '40%',
      display: 'block',
      margin: 'auto',
      marginTop: '2.5%',
      height: '7vh',
      minWidth: '160px',
      backgroundColor: '#fff',
      color: '#737373',
      borderWidth: 0,
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)',
      transitionProperty: 'background-color box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      padding: 0,
      transform: 'scale(1.4)',
      ':hover': {
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.2)',
        outline: 'none',
        transform: 'scale(1.4) skewX(-0.4deg)',
        cursor: 'pointer',
      },
      ':active': {
        outline: 'none',
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.3)',
        transitionDuration: '10ms',
      }
    },
    '& .google-button__icon': {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0px 0 8px 8px',
      marginTop: '5px',
      width: '18px',
      height: '18px',
      boxSizing: 'border-box',
    },
    '& .Link': {
      display: 'block',
      marginTop: '7.5%',
    },
  },
  '& #fastLoginRoles': {
    height: '15vh',
    backgroundColor: '#1ABC9C',
    width: '100%',
    margin: 0,
    padding: 0,
    h1: {
      display: 'block',
      color: '#fff',
      height: '5vh',
      width: '100%',
      paddingTop: '1.25vh',
      marginBottom: '1.25vh',
      textAlign: 'center',
      fontSize: '20px',
      visibility: 'visible'
    },
    '& #user': {
      ':hover': {
        backgroundColor: '#76448A',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #moderator': {
      ':hover': {
        backgroundColor: '#000080',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #admin': {
      ':hover': {
        backgroundColor: '#D61E53',
        transition: 'all 0.5s ease-out'
      }
    },
    '& .button': {
      borderRadius: '2.5px',

      height: '5vh',
      width: '33%',
      color: '#fff',
    },
  }
});

const login__mdBox = () => ({
  '& #buttonHome': {
    position: 'absolute',
    color: 'gray',
    left: '1%',
    top: 0,
    top: 0,
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      fontSize: '30px',
    }
  },
  '& #loginContainer': {
    marginTop: '5vh',
    height: '75vh',
    textAlign: 'center',
    bgcolor: '#fff',
    borderRadius: '2px',
    '& #title': {
      fontSize: '25px',
      paddingTop: '3%',
      borderBottom: '1px solid #B2B6B5',
      marginLeft: '4%',
      marginRight: '4%',
      marginBottom: '2.5%',
      paddingBottom: '2.5%',
      visibility: 'visible'
    },
    '& #submitButton': {
      width: '25%',
      minWidth: '150px',
      margin: 'auto',
      marginLeft: '2%',
      marginBottom: '10%',
    },
    '& #container': {
      marginTop: '5%',

    },
    '& .MuiTextField-root': {
      width: '60%',
      margin: 'auto',
      display: 'flex',
      marginBottom: '5%'
    },
    '& .google-button': {
      width: '40%',
      display: 'block',
      margin: 'auto',
      marginTop: '2.5%',
      height: '7vh',
      minWidth: '160px',
      backgroundColor: '#fff',
      color: '#737373',
      borderWidth: 0,
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)',
      transitionProperty: 'background-color box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      padding: 0,
      transform: 'scale(1.4)',
      ':hover': {
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.2)',
        outline: 'none',
        transform: 'scale(1.4) skewX(-0.4deg)',
        cursor: 'pointer',
      },
      ':active': {
        outline: 'none',
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.3)',
        transitionDuration: '10ms',
      }
    },
    '& .google-button__icon': {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0px 0 8px 8px',
      marginTop: '5px',
      width: '18px',
      height: '18px',
      boxSizing: 'border-box',
    },
    '& .Link': {
      display: 'block',
      marginTop: '7.5%',
    },
  },
  '& #fastLoginRoles': {
    height: '15vh',
    backgroundColor: '#1ABC9C',
    width: '100%',
    margin: 0,
    padding: 0,
    h1: {
      display: 'block',
      color: '#fff',
      height: '5vh',
      width: '100%',
      paddingTop: '1.25vh',
      marginBottom: '1.25vh',
      textAlign: 'center',
      fontSize: '20px',
      visibility: 'visible'
    },
    '& #user': {
      ':hover': {
        backgroundColor: '#76448A',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #moderator': {
      ':hover': {
        backgroundColor: '#000080',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #admin': {
      ':hover': {
        backgroundColor: '#D61E53',
        transition: 'all 0.5s ease-out'
      }
    },
    '& .button': {
      borderRadius: '2.5px',

      height: '5vh',
      width: '33%',
      color: '#fff',
    },
  }
});

const login__smBox = () => ({
  '& #buttonHome': {
    position: 'absolute',
    color: 'gray',
    left: '1%',
    top: -5,
    zIndex: 100,
    '& .MuiSvgIcon-root': {
      fontSize: '30px',
    }
  },
  '& #loginContainer': {
    position: 'absolute',
    width: '100%', 
    left: 0,
    top: 0,
    height: '80%',

    textAlign: 'center',
    bgcolor: '#fff',
    borderRadius: '2px',
    '& #title': {
      fontSize: '18px',
      paddingTop: '3%',
      borderBottom: '1px solid #B2B6B5',
      marginLeft: '4%',
      marginRight: '4%',
      marginBottom: '5%',
      paddingBottom: '2.5%',
      visibility: 'visible'
    },
    '& #ingresarButtonContainer': {
      position: 'absolute',
      top: '40vh',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
    },
    '& #submitButton': {
      width: '25%',
      minWidth: '150px',
    },
    '& #container': {
      position: 'absolute',
      top: '10vh',
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
    },
    '& .MuiTextField-root': {
      width: '120%',
      margin: 'auto',
      marginTop: '10%',
      marginLeft: '-10%',

      display: 'flex',
      marginBottom: '7.5%'
    },
    '& #loginButtonContainer': {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
    },
    '& .google-button': {
      position: 'absolute',
      top: '62.5vh',
      width: '60%',
      display: 'block',
      margin: 'auto',

      height: '7vh',
      minWidth: '160px',
      backgroundColor: '#fff',
      color: '#737373',
      borderWidth: 0,
      fontSize: '12px',
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.25)',
      transitionProperty: 'background-color box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-in-out',
      padding: 0,
      transform: 'scale(1.4)',
      ':hover': {
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.2)',
        outline: 'none',
        transform: 'scale(1.4) skewX(-0.4deg)',
        cursor: 'pointer',
      },
      ':active': {
        outline: 'none',
        boxShadow: '1px 4px 5px 1px rgba(0,0,0,0.3)',
        transitionDuration: '10ms',
      }
    },
    '& .google-button__icon': {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0px 0 8px 8px',
      marginTop: '5px',
      width: '18px',
      height: '18px',
      boxSizing: 'border-box',
    },
    '& .Link': {
      position: 'absolute',
      top: '75vh',
      display: 'block',
    },
  },
  '& #fastLoginRoles': {
    position: 'absolute',
    top: '80vh',
    left: 0,
    height: '20%',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    backgroundColor: '#1ABC9C',
    width: '100%',
    margin: 0,
    padding: 0,
    h1: {
      display: 'block',
      color: '#fff',
      height: '5vh',
      width: '100%',
      paddingTop: '1.25vh',
      marginBottom: '1.25vh',
      textAlign: 'center',
      fontSize: '16px',
      visibility: 'visible'
    },
    '& #user': {
      ':hover': {
        backgroundColor: '#76448A',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #moderator': {
      ':hover': {
        backgroundColor: '#000080',
        transition: 'all 0.5s ease-out'
      }
    },
    '& #admin': {
      ':hover': {
        backgroundColor: '#D61E53',
        transition: 'all 0.5s ease-out'
      }
    },
    '& .button': {
      marginTop: '2.5%',
      fontSize: '12px',
      borderRadius: '2.5px',
      height: '5vh',
      width: '33%',
      color: '#fff',
    },
  }
});



