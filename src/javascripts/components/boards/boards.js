import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

// let boardInfo = [];

const domStringBuilder = (boardInfo) => {
  let domString = '';
  for (let i = 0; i < boardInfo.length; i += 1) {
    domString += '<div class="col-3">';
    domString += `<div id="${boardInfo[i].id}" class="card p-1">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${boardInfo[i].name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  util.printToDom('user-boards', domString);
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      domStringBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards, domStringBuilder };
