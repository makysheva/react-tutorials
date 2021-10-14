const container = document.getElementById('root');
const valueTask = document.getElementById('valueTask');
const addBtn = document.getElementById('addBtn');
const ul = document.createElement('ul');
let tasks = [];

const handleClickAdd = () => {
  return tasks.push(valueTask.value);
};

const render = () => {
  const li = document.createElement('li');
  const closeBtn = document.createElement('button');
  container.before(ul);
  ul.appendChild(li);

  if (handleClickAdd()) {
    li.appendChild(document.createTextNode(`${valueTask.value}  `));
    valueTask.value = '';
  }

  li.appendChild(closeBtn);
  closeBtn.appendChild(document.createTextNode('X'));
  closeBtn.className = 'closeBtn';

  const handleClickRemove = () => {
    li.remove();
  };

  closeBtn.addEventListener('click', handleClickRemove);
};

addBtn.addEventListener('click', render);
