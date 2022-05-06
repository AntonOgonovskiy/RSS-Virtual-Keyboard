import { row0, row1, row2, row3, row4 } from "./buttons.js";
import { rows } from "./row.js"
const bod = document.querySelector('body')
export function createBody() {
	const wrap = document.createElement('div');
	const inp = document.createElement('textarea');
	wrap.classList.add('wrapper');
	inp.classList.add('input-style');
	inp.setAttribute('id', 'input');
	inp.setAttribute('cols', 100);
	inp.setAttribute('rows', 10);
	inp.setAttribute('name', 'textinput');
	inp.setAttribute('placeholder', 'Tap here');
	const keyboard = document.createElement('div');
	keyboard.classList.add('keyboard');
	for (let i = 0; i < 5; i++) {
		const row = document.createElement('div');
		row.classList.add('board');
		switch (i) {
			case 0:
				rows.row0(row0, row);
				break;
			case 1:
				rows.row1(row1, row);
				break;
			case 2:
				rows.row2(row2, row);
				break;
			case 3:
				rows.row3(row3, row);
				break;
			case 4:
				rows.row4(row4, row);
				break;
		}
		keyboard.append(row)
	}
	wrap.append(inp);
	wrap.append(keyboard)
	bod.prepend(wrap);
};