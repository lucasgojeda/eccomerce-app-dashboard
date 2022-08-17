
export const errorAlert = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return errorAlert__smBox();

    case md:
      return errorAlert__mdBox();

    case lg:
      return errorAlert__lgBox();

    case xl:
      return errorAlert__xlBox();

    default:
      break;
  }
}


const errorAlert__xlBox = () => ({
  width: '100%',
});

const errorAlert__lgBox = () => ({
  width: '100%',
});

const errorAlert__mdBox = () => ({
  width: '100%',
});

const errorAlert__smBox = () => ({
  width: '100%',
  margin: 'auto',
  marginLeft: '-1.5%',
  marginBottom: '10vh',
});



