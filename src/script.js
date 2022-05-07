import { createBody } from "./body.js"
createBody()
const capLock = document.getElementById('CapsLock');
console.log(capLock)



function keyboardStyle(event) {
	const btn = document.getElementById(event.code)
	if (event.type === 'keydown' && btn.id !== 'CapsLock') {
		btn.classList.add('active')
	} else if (event.type === 'keyup' && btn.id !== 'CapsLock') {
		btn.classList.remove('active')
	}
};

function mouseStyle(event) {
	const btn = document.getElementById(event.target.closest('div').id);
	if (btn === null) {
		return
	}
	if (event.type === 'mousedown' && btn.id !== 'CapsLock') {
		btn.classList.add('active');
		onmouseup = () => {
			btn.classList.remove('active');
		}
	}
}
function caps(event) {
	const btn = document.getElementById(event.code);
	const en = document.querySelectorAll('.en');
	const enUp = document.querySelectorAll('.enCap');
	const ru = document.querySelectorAll('.ru');
	const ruUp = document.querySelectorAll('.ruCap');
	if (btn.id === 'CapsLock') {
		btn.classList.toggle('active')
		en.forEach((item) => item.classList.toggle('hidden'));
		enUp.forEach((item) => item.classList.toggle('hidden'));
		ru.forEach((item) => item.classList.toggle('hidden'));
		ruUp.forEach((item) => item.classList.toggle('hidden'));
	}
}
function capMouse() {
	capLock.classList.toggle('active')
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
		ru.forEach((item) => item.classList.toggle('hidden'))
		en.forEach((item) => item.classList.toggle('hidden'))
	}
}





document.addEventListener('keydown', keyboardStyle);
document.addEventListener('keyup', keyboardStyle);
document.addEventListener('mousedown', mouseStyle);
capLock.addEventListener('click', capMouse)
document.addEventListener('keydown', caps);
document.addEventListener('keydown', lang);
