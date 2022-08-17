
export const tabNavRecordModal = (sm, md, lg, xl) => {
  switch (true) {

    case sm:
      return tabNavRecordModal__smBox();

    case md:
      return tabNavRecordModal__mdBox();

    case lg:
      return tabNavRecordModal__lgBox();

    case xl:
      return tabNavRecordModal__xlBox();

    default:
      break;
  }
}


const tabNavRecordModal__xlBox = () => ({
  width: '100%',
});

const tabNavRecordModal__lgBox = () => ({
  width: '100%',
});

const tabNavRecordModal__mdBox = () => ({
  width: '100%',
});

const tabNavRecordModal__smBox = () => ({
  width: '100%',
});



