const printToDom = (divId, textToPrint) => {
  const div = document.getElementById(divId);
  div.innerHTML = textToPrint;
};

export default { printToDom };
