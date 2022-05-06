import { createBody } from "./body.js"

createBody()
const bod = document.querySelector('body')


function keyboardStyle(event) {
	const btn = document.getElementById(event.code)
	if (event.type === 'keydown') {
		btn.classList.add('active')
	} else {
		btn.classList.remove('active')
	}
};

function mouseStyle(event) {
	const btn = document.getElementById(event.target.closest('div').id);
	if (btn === null) {
		return
	}
	btn.classList.add('active');
	onmouseup = () => {
		btn.classList.remove('active');
	}
}




document.addEventListener('keydown', keyboardStyle);
document.addEventListener('keyup', keyboardStyle);
document.addEventListener('mousedown', mouseStyle);



