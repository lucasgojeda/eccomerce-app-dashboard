
export const successAlert = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return successAlert__smBox();

    case md:
      return successAlert__mdBox();

    case lg:
      return successAlert__lgBox();

    case xl:
      return successAlert__xlBox();

    default:
      break;
  }
}


const successAlert__xlBox = () => ({
  width: '100%',
});

const successAlert__lgBox = () => ({
  width: '100%',
});

const successAlert__mdBox = () => ({
  width: '100%',
});

const successAlert__smBox = () => ({
  width: '100%',
  margin: 'auto',
  marginLeft: '-1.5%',
  marginBottom: '10vh',
});



