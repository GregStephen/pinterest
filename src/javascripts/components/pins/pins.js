import pinData from '../../helpers/data/pinsData';
import util from '../../helpers/util';
import './pins.scss';

const backButton = () => {
  document.getElementById('boards-page').classList.remove('hide');
  document.getElementById('pins-page').classList.add('hide');
};

const addBackButton = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', backButton);
};

const pinBuilder = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += '<div class="col-4">';
    domString += `<div id="${pin.id}" class="card p-1 mb-1 pin-card">`;
    domString += `<img class="card-img-top pin-image" src="${pin.imageUrl}" alt="Card image cap"></img>`;
    domString += '<div class="card-body">';
    domString += `<a class="link" href="${pin.link}" target="_blank">Check it out!</a>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('pins-on-board', domString);
  addBackButton();
};

const initPins = (boardId) => {
  pinData.loadPinsForBoard(boardId)
    .then((pins) => {
      pinBuilder(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
