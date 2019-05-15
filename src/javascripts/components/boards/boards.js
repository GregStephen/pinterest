import boardData from '../../helpers/data/boardsData';
import pins from '../pins/pins';
import util from '../../helpers/util';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = (boardInfo) => {
  let domString = '';
  boardInfo.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id="${board.id}" class="card p-1 mb-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '<button class="btn btn-info see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      domStringBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
