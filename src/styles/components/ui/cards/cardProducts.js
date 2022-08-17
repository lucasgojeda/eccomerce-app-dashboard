
export const cardProducts = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return cardProducts__smBox();

    case md:
      return cardProducts__mdBox();

    case lg:
      return cardProducts__lgBox();

    case xl:
      return cardProducts__xlBox();

    default:
      break;
  }
}


const cardProducts__xlBox = () => ({
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  left: '6vw',
  top: '12.5vh',
  fontFamily: 'Quicksand',
  '& #chartsContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5vh',
    marginLeft: '2.5vw',
    width: '100%',
    height: 'auto',
  }, 
  '& #doughnut': {
    width: '40ch',
    height: '40ch',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& #pie': {
    width: '40ch',  
    height: '40ch',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& .cardContainer': {
    marginTop: '5vh',
    width: '92.5vw', 
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-around',
  },
  '& .cardInside': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px',
  },
  '& .titleAndAmountContainer': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
  },
  '& .iconContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '50%',
    '& .MuiSvgIcon-root': {
      fontSize: '35px',
    }
  },
  '& .card': {
    width: '20vw',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,.05)',
    backgroundColor: '#fff',
    marginBottom: '30px',
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
    
    '& .border-left-pink': {
      borderLeft: '4px solid #f5365c',
    },
    
    '& .border-left-orange': {
      borderLeft: '4px solid #fb6340',
    },
    
    '& .border-left-yellow': {
      borderLeft: '4px solid #ffd600',
    },
    
    '& .border-left-blue': {
      borderLeft: '4px solid #11cdef',
    },
    
    '& .text-title': {
      color: '#8898aa',
      fontWeight: '500px',
      fontSize: '14px',
    },
    
    '& .text-amount': {
      fontWeight: '600px',
    },
    
    '& .icon-shape': {
      borderRadius: '50%',
      color: '#fff',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '25px',
      boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)!important',
    },
    
    '& .icon-area': {
      backgroundColor: '#ffd600',
    },
    
    '& .icon-pie': {
      backgroundColor: '#f5365c',
    },
    
    '& .icon-user': {
      backgroundColor: '#fb6340',
    },
    
    '& .icon-percent': {
      backgroundColor: '#11cdef',
    },
  },
});

const cardProducts__lgBox = () => ({
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  left: '7.5vw',
  top: '12.5vh',
  fontFamily: 'Quicksand',
  '& #chartsContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5vh',
    marginLeft: '-2.5vw',
    width: '100%',
    height: 'auto',
  }, 
  '& #doughnut': {
    width: '40ch',
    height: '40ch',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& #pie': {
    width: '40ch',  
    height: '40ch',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& .cardContainer': {
    marginTop: '5vh',
    width: '92.5vw', 
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-around',
  },
  '& .cardInside': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px',
  },
  '& .titleAndAmountContainer': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
  },
  '& .iconContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '50%',
    '& .MuiSvgIcon-root': {
      fontSize: '35px',
    }
  },
  '& .card': {
    width: '21vw',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,.05)',
    backgroundColor: '#fff',
    marginBottom: '30px',
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
    
    '& .border-left-pink': {
      borderLeft: '4px solid #f5365c',
    },
    
    '& .border-left-orange': {
      borderLeft: '4px solid #fb6340',
    },
    
    '& .border-left-yellow': {
      borderLeft: '4px solid #ffd600',
    },
    
    '& .border-left-blue': {
      borderLeft: '4px solid #11cdef',
    },
    
    '& .text-title': {
      color: '#8898aa',
      fontWeight: '500px',
      fontSize: '14px',
    },
    
    '& .text-amount': {
      fontWeight: '600px',
    },
    
    '& .icon-shape': {
      borderRadius: '50%',
      color: '#fff',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '25px',
      boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)!important',
    },
    
    '& .icon-area': {
      backgroundColor: '#ffd600',
    },
    
    '& .icon-pie': {
      backgroundColor: '#f5365c',
    },
    
    '& .icon-user': {
      backgroundColor: '#fb6340',
    },
    
    '& .icon-percent': {
      backgroundColor: '#11cdef',
    },
  },
});

const cardProducts__mdBox = () => ({
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  left: '7.5vw',
  top: '10vh',
  fontFamily: 'Quicksand',
  '& #chartsContainer': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2.5vh',
    marginLeft: '-3vw',
    width: '100%',
    height: 'auto',
  }, 
  '& #doughnut': {
    width: '35vw',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& #pie': {
    width: '35vw',  
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& .cardContainer': {
    marginTop: '5vh',
    width: '92.5vw', 
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  '& .cardInside': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px',
  },
  '& .titleAndAmountContainer': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
  },
  '& .iconContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '50%',
    '& .MuiSvgIcon-root': {
      fontSize: '35px',
    }
  },
  '& .card': {
    width: '35vw',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,.05)',
    backgroundColor: '#fff',
    marginBottom: '30px',
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
    
    '& .border-left-pink': {
      borderLeft: '4px solid #f5365c',
    },
    
    '& .border-left-orange': {
      borderLeft: '4px solid #fb6340',
    },
    
    '& .border-left-yellow': {
      borderLeft: '4px solid #ffd600',
    },
    
    '& .border-left-blue': {
      borderLeft: '4px solid #11cdef',
    },
    
    '& .text-title': {
      color: '#8898aa',
      fontWeight: '500px',
      fontSize: '14px',
    },
    
    '& .text-amount': {
      fontWeight: '600px',
    },
    
    '& .icon-shape': {
      borderRadius: '50%',
      color: '#fff',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '25px',
      boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)!important',
    },
    
    '& .icon-area': {
      backgroundColor: '#ffd600',
    },
    
    '& .icon-pie': {
      backgroundColor: '#f5365c',
    },
    
    '& .icon-user': {
      backgroundColor: '#fb6340',
    },
    
    '& .icon-percent': {
      backgroundColor: '#11cdef',
    },
  },
});

const cardProducts__smBox = () => ({
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  left: '0',
  top: '0',
  fontFamily: 'Quicksand',
  '& #chartsContainer': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '2.5vh',
    width: '100%',
    height: 'auto',
  }, 
  '& #doughnut': {
    width: '85%',
    padding: '10px',
    marginBottom: '10vh',
    backgroundColor: '#fff',
    borderRadius: '6px', 
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& #pie': {
    width: '85%',  
    padding: '10px',
    marginBottom: '2.5vh',
    backgroundColor: '#fff',
    borderRadius: '6px', 
     boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  },
  '& .cardContainer': {
    width: '92.5vw', 
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '2.5vh',
  },
  '& .cardInside': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px',
  },
  '& .titleAndAmountContainer': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
  },
  '& .iconContainer': {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '50%',
    '& .MuiSvgIcon-root': {
      fontSize: '35px',
    }
  },
  '& .card': {
    width: '80vw',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,.05)',
    backgroundColor: '#fff',
    marginBottom: '30px',
    boxShadow: '0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
    
    '& .border-left-pink': {
      borderLeft: '4px solid #f5365c',
    },
    
    '& .border-left-orange': {
      borderLeft: '4px solid #fb6340',
    },
    
    '& .border-left-yellow': {
      borderLeft: '4px solid #ffd600',
    },
    
    '& .border-left-blue': {
      borderLeft: '4px solid #11cdef',
    },
    
    '& .text-title': {
      color: '#8898aa',
      fontWeight: '500px',
      fontSize: '14px',
    },
    
    '& .text-amount': {
      fontWeight: '600px',
    },
    
    '& .icon-shape': {
      borderRadius: '50%',
      color: '#fff',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '25px',
      boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)!important',
    },
    
    '& .icon-area': {
      backgroundColor: '#ffd600',
    },
    
    '& .icon-pie': {
      backgroundColor: '#f5365c',
    },
    
    '& .icon-user': {
      backgroundColor: '#fb6340',
    },
    
    '& .icon-percent': {
      backgroundColor: '#11cdef',
    },
  },
});



