import {
    row0, row1, row2, row3, row4,
} from './buttons.js';
import Row from './row.js';

const bod = document.querySelector('body');
export default function createBody() {
    const wrap = document.createElement('div');
    const inp = document.createElement('textarea');
    wrap.classList.add('wrapper');
    inp.classList.add('input-style');
    inp.setAttribute('id', 'input');
    inp.setAttribute('cols', 100);
    inp.setAttribute('rows', 10);
    inp.setAttribute('name', 'textinput');
    inp.setAttribute('placeholder', 'The keyboard was created in the Windows operating system. Shift Alt is used to switch the language. Configuration of ESlint you can find in ".eslintrc.js" file in my repo. I hope you like it. Good luck! https://github.com/AntonOgonovskiy/RSS-Virtual-Keyboard/tree/virtual_keyboard');
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    for (let i = 0; i < 5; i += 1) {
        const row = document.createElement('div');
        row.classList.add('board');
        switch (i) {
            case 0:
                Row.row0(row0, row);
                break;
            case 1:
                Row.row1(row1, row);
                break;
            case 2:
                Row.row2(row2, row);
                break;
            case 3:
                Row.row3(row3, row);
                break;
            case 4:
                Row.row4(row4, row);
                break;
            default:
                break;
        }
        keyboard.append(row);
    }
    wrap.append(inp);
    wrap.append(keyboard);
    bod.prepend(wrap);
}
