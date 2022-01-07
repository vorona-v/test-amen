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

function initDatepicker() {
  let datepicker = new DatePicker(document.getElementById('datepicker'));
}

function initCustomSelect() {
  const customSelectra = new Selectra('#selectCustom')
  customSelectra.init()
}

function animatedElement(element, delay) {
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
    threshold: [0.6]
  };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(element);

  for (let elm of elements) {
    observer.observe(elm);
  }
}


function animatedPlane() {
  let intViewportWidth = document.body.clientWidth
  let intBodyHeight = document.body.clientHeight

  let svg = document.getElementById('lines')

  svg.style.width = intViewportWidth
  svg.style.height = intBodyHeight
  svg.setAttribute("viewBox", "350 400 " + intViewportWidth + " " + intBodyHeight );

  paths = svg.getElementsByTagName('path');

  console.log(paths)

  /* paths.forEach(function() {
    console.log(path.getTotalLength());
  }) */

  let pathsTotalLength = 0;
  for (let item of paths) {

    pathsTotalLength += item.getTotalLength()

  }

  console.log(pathsTotalLength)

  var pt = path.getPointAtLength(scrollPercentage * pathLen);
}


/* 
function positionTheDot() {

  // Какой процент вниз по странице 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Получить длину пути
  var path = document.getElementById("lines");
  var pathLen = path.getTotalLength();


  
  // Получить положение точки в <scrollPercentage> вдоль пути.
  var pt = path.getPointAtLength(scrollPercentage * pathLen);
  
  // Поместите красную точку в эту точку
  var dot = document.getElementById("plane");
  dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
  
};

// Обновить положение точки при получении события прокрутки.
window.addEventListener("scroll", positionTheDot);

// Установите начальную позицию точки.
positionTheDot(); */





fixedHeader()
initDatepicker()
initCustomSelect()
animatedElement('.our-service-offers-section', 150)
animatedPlane()