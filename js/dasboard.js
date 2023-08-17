const eventManagements = window.localStorage.getItem('eventsManagement');
let events = eventManagements ? JSON.parse(eventManagements) : [];

console.log(events);

window.onload = () => {
  renderList(events);
};

let Eventlist = document.getElementById('list');

function addEventToDOM(event) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <th scope="row">${event.title}</th>
    <td>${event.category}</td>
    <td>${event.eventDate}</td>
    <td>${event.location}</td>
    <td>${event.venu}</td>
    <td>${event.fee}</td>
    <td id=${event.id} class="remove">remove</td>
    
    `;
  Eventlist.append(tr);
}

function renderList(events) {
  list.innerHTML = '';
  for (let i = 0; i < events.length; i++) {
    addEventToDOM(events[i]);
  }
  // tasksCounter.innerHTML=tasks.length;
}

function addEventTask(event) {
  if (event) {
    events.push(event);
    window.localStorage.setItem('eventsManagement', JSON.stringify(events));
    renderList(events);

    showNotification('task added successfully');
    return;
  }
  showNotification('task  text can not be added');
}

function insertArray(obj) {
  const event = {
    title: obj.title,
    id: Date.now(),
    location: obj.location,
    imageLink: obj.image,
    venu: obj.venu,
    lastDate: obj.lastDate,
    eventDate: obj.eventDate,
    category: obj.category,
    fee: obj.fee,
  };
  addEventTask(event);

  //  console.log(task);
}

function showNotification(x) {
  alert(x);
}

function addEvent() {
  const title = document.getElementById('title').value;
  const location = document.getElementById('location').value;
  const image = document.getElementById('image').value;
  const venu = document.getElementById('venu').value;
  const lastDate = document.getElementById('lastDate').value;
  const eventDate = document.getElementById('eventDate').value;
  const category = document.getElementById('category').value;
  const fee = document.getElementById('fee').value;
  if (
    fee == '' ||
    title == '' ||
    location == '' ||
    image == '' ||
    venu == '' ||
    lastDate == '' ||
    eventDate == '' ||
    category == ''
  ) {
    showNotification('box can not be empty');
    return;
  }

  let obj = {
    title,
    location,
    image,
    venu,
    lastDate,
    eventDate,
    category,
    fee,
  };
  console.log(obj);
  insertArray(obj);
}

function deleteTask(eventId) {
  const newTask = events.filter(function (task) {
    return task.id !== Number(eventId);
  });
  events = newTask;
  window.localStorage.setItem('eventsManagement', JSON.stringify(events));

  renderList(events);
  showNotification('tasks deleted successfully');
}

function handleClickListener(e) {
  const target = e.target;
  if (target.className == 'remove') {
    const eventId = target.id;
    deleteTask(eventId);
  }
}

document.addEventListener('click', handleClickListener);

let searchBar = document.getElementById('eventBox');

searchBar.addEventListener('keyup', function (event) {
  let keyWord = searchBar.value.toLowerCase();
  // console.log(keyWord);
  let filterEvent = events.filter((x) => {
    //    x = x.toLowerCase();
    if (x.title.indexOf(keyWord) > -1) {
      return x.title.indexOf(keyWord) > -1;
    } else if (x.eventDate.indexOf(keyWord) > -1) {
      return x.eventDate.indexOf(keyWord) > -1;
    }
  });
  console.log(filterEvent);

  renderList(filterEvent);
});
