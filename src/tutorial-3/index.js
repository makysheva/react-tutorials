const container = document.getElementById('root');
const valueTask = document.getElementById('valueTask');
const addBtn = document.getElementById('addBtn');
const ul = document.createElement('ul');
let tasks = [];
const ulElem = document.querySelector('ul');
const inputElem = document.querySelector('input');
let listeners = [];

const removeTask = (index) => {
  const [func, removeBtn] = listeners[index];

  removeBtn.removeEventListener('click', func);

  tasks = tasks.filter((_, i) => index !== i);
  renderUl();
};

const renderUl = () => {
  ulElem.innerHTML = '';
  tasks.forEach((str, i) => {
    const li = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';

    const removeFunc = () => removeTask(i);
    listeners.push([removeFunc, removeBtn]);

    li.innerText = str;
    li.appendChild(removeBtn);
    removeBtn.addEventListener('click', removeFunc);
    // removeBtn.onclick = () => removeTask(i)
    ulElem.appendChild(li);
  });
};

const handleClickAdd = () => {
  const { value } = inputElem;
  tasks.push(value);
  inputElem.value = '';
  renderUl();
};

document.querySelector('#addBtn').onclick = handleClickAdd;

// const handleClickAdd = () => {
//   return tasks.push(valueTask.value);
// };

// const render = () => {
//   const li = document.createElement('li');
//   const closeBtn = document.createElement('button');
//   container.before(ul);
//   ul.appendChild(li);

//   if (handleClickAdd()) {
//     li.appendChild(document.createTextNode(`${valueTask.value}  `));
//     valueTask.value = '';
//   }

//   li.appendChild(closeBtn);
//   closeBtn.appendChild(document.createTextNode('X'));
//   closeBtn.className = 'closeBtn';

//   const handleClickRemove = () => {
//     li.remove();
//   };

//   closeBtn.addEventListener('click', handleClickRemove);
// };

// addBtn.addEventListener('click', render);
