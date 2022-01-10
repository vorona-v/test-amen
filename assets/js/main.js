function addClassById(id, addedClass) {
  const newElem = document.getElementById(id)
  newElem.classList.add(addedClass)
}

function removeClassById(id, removedClass) {
  const newElem = document.getElementById(id)
  newElem.classList.remove(removedClass)
}

setTimeout(function() {
  removeClassById('preloadder_wrap', "show")

  addClassById('big_plane', 'show')
  addClassById('small_cloud', 'show')
  addClassById('big_cloud', 'show')
  addClassById('big_dollar', 'show')
  addClassById('small_dollar', 'show')
}, 3000);



function fixedHeader() {
  let scrollpos = window.scrollY

  const header = document.getElementById('header')
  const scrollChange = 1

  const addClassOnScroll = () =>  addClassById('header', "fixed")
  const removeClassOnScroll = () =>  removeClassById('header', "fixed")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) { addClassOnScroll() }
    else { removeClassOnScroll() }
    
  })
}


const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".header-section");

navBtn.onclick = () => {
  navMenu.classList.toggle('active');
}


function initDatepicker() {
  let datepicker = new DatePicker(document.getElementById('datepicker'));
}

function initCustomSelect() {
  const customSelectra = new Selectra('#selectCustom')
  customSelectra.init()
}

function animatedElement(element, delay, position) {
  function onEntry(entry) {
    let delayInMilliseconds = 0;

    entry.forEach(change => {
      if (change.isIntersecting) {
        setTimeout(function() {
          change.target.classList.add('element-show-js');
        }, delayInMilliseconds);
        delayInMilliseconds += delay;
      }
    });
  }

  let options = {
    threshold: [position]
  };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(element);

  for (let elm of elements) {
    observer.observe(elm);
  }
}

function animatedCheckList() {
  let intViewportHeight = window.innerHeight/2;
  let checkList = document.querySelectorAll('.how-it-works-item');
  
  for ( let check of checkList) {
    let positionCkeck = check.getBoundingClientRect().top;

    if( positionCkeck <= intViewportHeight ) {
      check.classList.add("ckecked")
    }
  }
}

function animatedIcon() {
  let intViewportHeight = window.innerHeight/2;
  let iconWrap = document.querySelector('.simple-and-absolutely-icon');
  let positionCkeck = iconWrap.getBoundingClientRect().top;
 
  if( positionCkeck <= intViewportHeight ) {
    iconWrap.classList.add("show")
  }
}

function animatedPlane() {
  let intViewportWidth = document.body.clientWidth
  let intBodyHeight = document.body.clientHeight

  let svg = document.getElementById('lines')

  svg.style.width = intViewportWidth
  svg.style.height = intBodyHeight
  svg.setAttribute("viewBox", "0 0 " + intViewportWidth + " " + intBodyHeight );

  path = svg.getElementById('path');
  var pathLen = path.getTotalLength();

   let scrollPercentage = 1 - (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var pt = path.getPointAtLength(scrollPercentage * pathLen);

  var dot = document.getElementById("plane");
  dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");

}


//window.addEventListener("scroll", animatedPlane);

window.addEventListener("scroll", animatedCheckList);
window.addEventListener("scroll", animatedIcon);


fixedHeader()
initDatepicker()
initCustomSelect()
animatedElement('.our-service-offers-section', 150, 0.5)
animatedElement('.our-service-offers-info-wrap', 150, 0.3)
animatedElement('.how-it-works-item', 350, 0)
animatedElement('.our-service-guarantees-item', 350, 0.5)
animatedElement('.our-service-guarantees-info', 350, 0.5)
animatedPlane()