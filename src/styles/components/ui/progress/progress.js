
export const progress = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return progress__smBox();

    case md:
      return progress__mdBox();

    case lg:
      return progress__lgBox();

    case xl:
      return progress__xlBox();

    default:
      break;
  }
}


const progress__xlBox = () => ({
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 100
});

const progress__lgBox = () => ({
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 100
});

const progress__mdBox = () => ({
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 100
});

const progress__smBox = () => ({
  color: '#fff',
  zIndex: (theme) => theme.zIndex.drawer + 100
});



