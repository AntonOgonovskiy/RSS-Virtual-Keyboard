class Row {

	row0(row0, row) {
		for (let i of row0) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			// langRu.classList.add('hidden');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			capEnUp.classList.add('hidden');
			let capRu = document.createElement('span');
			capRu.classList.add('hidden');
			let capRuUp = document.createElement('span');
			capRuUp.classList.add('hidden');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			langRu.append(capRu);
			langRu.append(capRuUp);
			langEn.append(capEn);
			langEn.append(capEnUp);
			key.append(langEn);
			key.append(langRu);
			row.append(key);
		}
	};
	row1(row1, row) {
		for (let i of row1) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			langRu.classList.add('hidden');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			capEnUp.classList.add('hidden');
			let capRu = document.createElement('span');
			capRu.classList.add('hidden');
			let capRuUp = document.createElement('span');
			capRuUp.classList.add('hidden');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			langRu.append(capRu);
			langRu.append(capRuUp);
			langEn.append(capEn);
			langEn.append(capEnUp);
			key.append(langEn);
			key.append(langRu);
			row.append(key);
		}
	};
	row2(row2, row) {
		for (let i of row2) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			langRu.classList.add('hidden');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			capEnUp.classList.add('hidden');
			let capRu = document.createElement('span');
			capRu.classList.add('hidden');
			let capRuUp = document.createElement('span');
			capRuUp.classList.add('hidden');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			langRu.append(capRu);
			langRu.append(capRuUp);
			langEn.append(capEn);
			langEn.append(capEnUp);
			key.append(langEn);
			key.append(langRu);
			row.append(key);
		}
	};
	row3(row3, row) {
		for (let i of row3) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			langRu.classList.add('hidden');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			capEnUp.classList.add('hidden');
			let capRu = document.createElement('span');
			capRu.classList.add('hidden');
			let capRuUp = document.createElement('span');
			capRuUp.classList.add('hidden');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			langRu.append(capRu);
			langRu.append(capRuUp);
			langEn.append(capEn);
			langEn.append(capEnUp);
			key.append(langEn);
			key.append(langRu);
			row.append(key);
		}
	};
	row4(row4, row) {
		const keyWrap = document.createElement('div');
		keyWrap.classList.add('key-wrap')
		for (let i of row4) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			langRu.classList.add('hidden');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			capEnUp.classList.add('hidden');
			let capRu = document.createElement('span');
			capRu.classList.add('hidden');
			let capRuUp = document.createElement('span');
			capRuUp.classList.add('hidden');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			langRu.append(capRu);
			langRu.append(capRuUp);
			langEn.append(capEn);
			langEn.append(capEnUp);
			key.append(langEn);
			key.append(langRu);
			if (key.id === 'ArrowUp' || key.id === 'ArrowDown') {
				keyWrap.append(key)
				row.append(keyWrap);
			} else {
				row.append(key);
			}
		}
	};

}
const rows = new Row()
export { rows }