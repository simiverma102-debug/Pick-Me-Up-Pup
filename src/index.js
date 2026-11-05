const NUMBER_OF_DOGS = 15;

const state = {
  dogImage: null,
};
//helper finction
const loadcontrols = () => {
  state.dogImage = document.getElementById('dog-image');
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const setrandomdog = () => {
  const imgnumber = pickRandomNumber();
  const newimgname = `../imgs/${imgnumber}.jpeg`;
  state.dogImage.src = newimgname;
};

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadcontrols();
  setrandomdog();
};

onLoaded();
