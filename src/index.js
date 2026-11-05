const NUMBER_OF_DOGS = 15;

const state = {
  dogImageContainer: null,
  adddogbutton: null,
};
//helper finction
const loadcontrols = () => {
  state.adddogbutton = document.getElementById('adddogbutton');
  state.dogImageContainer = document.getElementById('dog-img-container');
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};
const handleaddbuttonclicked = (event) => {
  const imgnumber = pickRandomNumber();
  const newimgname = `../imgs/${imgnumber}.jpeg`;
  const newdog = document.createElement('img');
  newdog.src = newimgname;
  newdog.alt = 'A random dog';
  state.dogImageContainer.prepend(newdog);
};

const registerevents = () => {
  state.adddogbutton.addEventListener('click',handleaddbuttonclicked);
};

// const setrandomdog = () => {
//   const imgnumber = pickRandomNumber();
//   const newimgname = `../imgs/${imgnumber}.jpeg`;
//   state.dogImage.src = newimgname;
// };

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadcontrols();
  registerevents();
  //setrandomdog();
};

onLoaded();
