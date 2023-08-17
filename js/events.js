const eventDataFromLOcalStorage =
  window.localStorage.getItem('eventsManagement');
let eventData = JSON.parse(eventDataFromLOcalStorage);
// console.log(eventData);

function render(x) {
  const eventCard = document.getElementById('eventCard');
  eventCard.innerHTML = ' ';
  x.map((e) => {
    eventCard.innerHTML += `
<div class="col-md-5 text-center g-0 border-outline pb-5">
                <div class="image_conatiner">
    <img src=${e.imageLink} alt="${e.title}">
    <span id="dateOfEvant">registration open till date <b>${e.lastDate}</b></span>
                </div>
                <div class="content_event">
                    <h2>${e.title}</h2>
    
                    <span>start on <br> ${e.eventDate} </span>
                    <span>Entry fee <br> ${e.fee} </span>
                    <span>Location <br> ${e.location}</span>
                    <span>Venue <br>${e.venu} </span>
                    
    <br>
    <button class="btn btn-danger mt-3" onclick=register(${e.fee})>Registration</button>
    <button class="btn btn-danger mt-3" onclick="share()">share</button>

                </div>
               </div>
`;
  });
}
render(eventData);

function technical() {
  let filterByCategory = eventData.filter((x) => {
    return x.category == 'tech';
  });
  render(filterByCategory);
}

function sport() {
  let filterByCategory = eventData.filter((x) => {
    return x.category == 'sports';
  });
  render(filterByCategory);
}
function cultural() {
  let filterByCategory = eventData.filter((x) => {
    return x.category == 'cultural';
  });
  render(filterByCategory);
}

function comingSoon() {
  let filterByCategory = eventData.filter((x) => {
    return x.category == 'sports';
  });
  render(filterByCategory);
}

// searchbar
let searchBarEvent = document.getElementById('eventBoxFilter');
searchBarEvent.addEventListener('keyup', function (event) {
  let keyWord = searchBarEvent.value.toLowerCase();
  // console.log(keyWord);
  let filterEvents = eventData.filter((x) => {
    //    x = x.toLowerCase();
    if (x.title.indexOf(keyWord) > -1) {
      return x.title.indexOf(keyWord) > -1;
    } else if (x.eventDate.indexOf(keyWord) > -1) {
      return x.eventDate.indexOf(keyWord) > -1;
    } else if (x.location.indexOf(keyWord) > -1) {
      return x.location.indexOf(keyWord) > -1;
    }
  });
  // console.log(filterEvents);
  render(filterEvents);
});

// search by tag name (function)

function a() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'blind coding';
  });
  render(filterByCategory);
}

function b() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Hackathon';
  });
  render(filterByCategory);
}

function c() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Arduino Effect';
  });
  render(filterByCategory);
}

function d() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Bridge Making';
  });
  render(filterByCategory);
}

function e() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'AutoCad';
  });
  render(filterByCategory);
}

function f() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'blind coding';
  });
  render(filterByCategory);
}

function g() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Bug Hunting';
  });
  render(filterByCategory);
}

function h() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'cinematography';
  });
  render(filterByCategory);
}

function i() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Boat Making-Mech';
  });
  render(filterByCategory);
}
function j() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Competitive Programming';
  });
  render(filterByCategory);
}
function k() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Free fire';
  });
  render(filterByCategory);
}
function l() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'General Quiz Competition';
  });
  render(filterByCategory);
}
function m() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Mateys-Aqua bot';
  });
  render(filterByCategory);
}
function n() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'FPhotoGraphy';
  });
  render(filterByCategory);
}
function o() {
  let filterByCategory = eventData.filter((x) => {
    return x.title == 'Android';
  });
  render(filterByCategory);
}

// share social media link

function share(a) {
  if (navigator.share) {
    navigator.share({
      title: 'hii there',
      url: 'https://vishal7547.github.io/technoriti-hackathon/',
    });
  }
}

// register function

function register(a) {
  window.localStorage.setItem('eventFee', a);
  window.open('registrationForm.html');
}
