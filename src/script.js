import { row1, row2, row3, row4 } from "./buttons.js";
const bod = document.querySelector('body')
function createBody() {
	const wrap = document.createElement('div');
	const inp = document.createElement('textarea');
	wrap.classList.add('wrapper');
	inp.classList.add('input-style');
	inp.setAttribute('id', 'input');
	inp.setAttribute('cols', 100);
	inp.setAttribute('rows', 10);
	inp.setAttribute('name', 'textinput');
	inp.setAttribute('placeholder', 'Tap here');

	wrap.append(inp);
	bod.prepend(wrap);
};
// createBody()
// document.addEventListener('keydown', function (event) {
// 	console.log(event.code)
// });
console.log(row1[0])