import createBody from './body.js';

createBody();
const capLock = document.getElementById('CapsLock');
let language = 'en';
function keyboardStyle(event) {
  const btn = document.getElementById(event.code);
  if (event.type === 'keydown' && btn.id !== 'CapsLock') {
    btn.classList.add('active');
  } else if (event.type === 'keyup' && btn.id !== 'CapsLock') {
    btn.classList.remove('active');
  }
}
function mouseStyle(event) {
  const btn = document.getElementById(event.target.closest('div').id);
  if (btn === null) {
    return;
  }
  if (event.type === 'mousedown' && btn.id !== 'CapsLock') {
    btn.classList.add('active');
    onmouseup = () => {
      btn.classList.remove('active');
    };
  }
}
function caps(event) {
  const btn = document.getElementById(event.code);
  const en = document.querySelectorAll('.en');
  const enUp = document.querySelectorAll('.enCap');
  const ru = document.querySelectorAll('.ru');
  const ruUp = document.querySelectorAll('.ruCap');
  if (btn.id === 'CapsLock') {
    btn.classList.toggle('active');
    en.forEach((item) => item.classList.toggle('hidden'));
    enUp.forEach((item) => item.classList.toggle('hidden'));
    ru.forEach((item) => item.classList.toggle('hidden'));
    ruUp.forEach((item) => item.classList.toggle('hidden'));
  }
}
function capMouse() {
  capLock.classList.toggle('active');
  const en = document.querySelectorAll('.en');
  const enUp = document.querySelectorAll('.enCap');
  const ru = document.querySelectorAll('.ru');
  const ruUp = document.querySelectorAll('.ruCap');
  en.forEach((item) => item.classList.toggle('hidden'));
  enUp.forEach((item) => item.classList.toggle('hidden'));
  ru.forEach((item) => item.classList.toggle('hidden'));
  ruUp.forEach((item) => item.classList.toggle('hidden'));
}
function lang(event) {
  const alt = document.getElementById('AltLeft');
  const shift = document.getElementById('ShiftLeft');
  const ru = document.querySelectorAll('.langRu');
  const en = document.querySelectorAll('.langEn');
  alt.onclick = event.preventDefault();
  if (alt.classList.contains('active') && shift.classList.contains('active')) {
    ru.forEach((item) => item.classList.toggle('hidden'));
    en.forEach((item) => item.classList.toggle('hidden'));
  }
}

function shiftOn(event) {
  const btn = document.getElementById(event.code);
  const alt = document.getElementById('AltLeft');
  const cap = document.getElementById('CapsLock');
  const en = document.querySelectorAll('.en');
  const enUp = document.querySelectorAll('.enUp');
  const capEn = document.querySelectorAll('.enCap');
  const capEnS = document.querySelectorAll('.enCapS');
  const ru = document.querySelectorAll('.ru');
  const ruUp = document.querySelectorAll('.ruUp');
  const capRu = document.querySelectorAll('.ruCap');
  const capRuS = document.querySelectorAll('.ruCapS');
  if (btn.id === 'ShiftLeft' || btn.id === 'ShiftRight') {
    if (alt.classList.contains('active')) {
      return;
    }
    if (cap.classList.contains('active')) {
      capEn.forEach((item) => item.classList.add('hidden'));
      capEnS.forEach((item) => item.classList.remove('hidden'));
      capRu.forEach((item) => item.classList.add('hidden'));
      capRuS.forEach((item) => item.classList.remove('hidden'));
    } else {
      en.forEach((item) => item.classList.add('hidden'));
      enUp.forEach((item) => item.classList.remove('hidden'));
      ru.forEach((item) => item.classList.add('hidden'));
      ruUp.forEach((item) => item.classList.remove('hidden'));
    }
  }
}
function shiftOff(event) {
  const btn = document.getElementById(event.code);
  const cap = document.getElementById('CapsLock');
  const en = document.querySelectorAll('.en');
  const enUp = document.querySelectorAll('.enUp');
  const capEn = document.querySelectorAll('.enCap');
  const capEnS = document.querySelectorAll('.enCapS');
  const ru = document.querySelectorAll('.ru');
  const ruUp = document.querySelectorAll('.ruUp');
  const capRu = document.querySelectorAll('.ruCap');
  const capRuS = document.querySelectorAll('.ruCapS');
  if (btn.id === 'ShiftLeft' || btn.id === 'ShiftRight') {
    if (cap.classList.contains('active')) {
      capEn.forEach((item) => item.classList.remove('hidden'));
      capEnS.forEach((item) => item.classList.add('hidden'));
      capRu.forEach((item) => item.classList.remove('hidden'));
      capRuS.forEach((item) => item.classList.add('hidden'));
    } else {
      en.forEach((item) => item.classList.remove('hidden'));
      enUp.forEach((item) => item.classList.add('hidden'));
      ru.forEach((item) => item.classList.remove('hidden'));
      ruUp.forEach((item) => item.classList.add('hidden'));
    }
  }
}
function shiftClick(event) {
  const btn = document.getElementById(event.target.closest('div').id);
  const cap = document.getElementById('CapsLock');
  const en = document.querySelectorAll('.en');
  const enUp = document.querySelectorAll('.enUp');
  const capEn = document.querySelectorAll('.enCap');
  const capEnS = document.querySelectorAll('.enCapS');
  const ru = document.querySelectorAll('.ru');
  const ruUp = document.querySelectorAll('.ruUp');
  const capRu = document.querySelectorAll('.ruCap');
  const capRuS = document.querySelectorAll('.ruCapS');
  if (btn === null) {
    return;
  }
  if (event.type === 'mousedown' && (btn.id === 'ShiftLeft' || btn.id === 'ShiftRight')) {
    btn.classList.add('active');
    if (cap.classList.contains('active')) {
      capEn.forEach((item) => item.classList.add('hidden'));
      capEnS.forEach((item) => item.classList.remove('hidden'));
      capRu.forEach((item) => item.classList.add('hidden'));
      capRuS.forEach((item) => item.classList.remove('hidden'));
    } else {
      en.forEach((item) => item.classList.add('hidden'));
      enUp.forEach((item) => item.classList.remove('hidden'));
      ru.forEach((item) => item.classList.add('hidden'));
      ruUp.forEach((item) => item.classList.remove('hidden'));
    }
    onmouseup = () => {
      btn.classList.remove('active');
      if (cap.classList.contains('active')) {
        capEn.forEach((item) => item.classList.remove('hidden'));
        capEnS.forEach((item) => item.classList.add('hidden'));
        capRu.forEach((item) => item.classList.remove('hidden'));
        capRuS.forEach((item) => item.classList.add('hidden'));
      } else {
        en.forEach((item) => item.classList.remove('hidden'));
        enUp.forEach((item) => item.classList.add('hidden'));
        ru.forEach((item) => item.classList.remove('hidden'));
        ruUp.forEach((item) => item.classList.add('hidden'));
      }
    };
  }
}
function setLocalStorage() {
  const ru = document.querySelector('.langRu');
  if (ru.classList.contains('hidden')) {
    language = 'en';
  } else {
    language = 'ru';
  }
  localStorage.setItem('language', language);
}
function translate() {
  const ru = document.querySelectorAll('.langRu');
  const en = document.querySelectorAll('.langEn');
  if (language === 'en') {
    ru.forEach((item) => item.classList.add('hidden'));
    en.forEach((item) => item.classList.remove('hidden'));
  } else {
    ru.forEach((item) => item.classList.remove('hidden'));
    en.forEach((item) => item.classList.add('hidden'));
  }
}
function getLocalStorage() {
  language = localStorage.getItem('language');
  translate(language);
}
document.addEventListener('keydown', keyboardStyle);
document.addEventListener('keyup', keyboardStyle);
document.addEventListener('mousedown', mouseStyle);
document.addEventListener('mousedown', shiftClick);
capLock.addEventListener('click', capMouse);
document.addEventListener('keydown', lang);
document.addEventListener('keydown', caps);
document.addEventListener('keydown', shiftOn);
document.addEventListener('keyup', shiftOff);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
