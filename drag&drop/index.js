const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder');

const dragstart = (event) => {
  const target = event.target;
  target.classList.add('hold');
  setTimeout(() => target.classList.add('hide'),0);
};

const dragend = (event) => {
  const target = event.target;
  target.className = 'item';
};

const dragover = (event) => {
  event.preventDefault();
};

const dragenter = (event) => {
  const target = event.target;
  target.classList.add('hovered');
};

const dragleave = (event) => {
  const target = event.target;
  target.classList.remove('hovered');
};

const dragdrop = (event) => {
  const target = event.target;
  target.classList.remove('hovered');
  target.append(item);
};

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeHolders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});


