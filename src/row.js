class Row {

	row0(row0, row) {
		for (let i of row0) {
			const key = document.createElement('div');
			key.setAttribute('id', i.id)
			key.classList.add('key');
			key.classList.add(i.class)
			let langRu = document.createElement('span');
			let langEn = document.createElement('span');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			let capRu = document.createElement('span');
			let capRuUp = document.createElement('span');
			let capsEn = document.createElement('span');
			let capsEnUp = document.createElement('span');
			let capsRu = document.createElement('span');
			let capsRuUp = document.createElement('span');
			langRu.classList.add('hidden');
			langRu.classList.add('langRu');
			langEn.classList.add('langEn');
			capEn.classList.add('en');
			capEnUp.classList.add('hidden');
			capEnUp.classList.add('enUp');
			capRu.classList.add('ru');
			capRuUp.classList.add('hidden');
			capRuUp.classList.add('ruUp');
			capsEn.classList.add('hidden');
			capsEn.classList.add('enCap');
			capsEnUp.classList.add('hidden');
			capsEnUp.classList.add('enCapS');
			capsRu.classList.add('hidden');
			capsRu.classList.add('ruCap');
			capsRuUp.classList.add('hidden');
			capsRuUp.classList.add('ruCapS');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp
			capsEn.innerHTML = i.capEn;
			capsEnUp.innerHTML = i.capEnS;
			capsRu.innerHTML = i.capRus;
			capsRuUp.innerHTML = i.capRusS;
			langRu.append(capRu);
			langRu.append(capRuUp);
			langRu.append(capsRu);
			langRu.append(capsRuUp);
			langEn.append(capsEn);
			langEn.append(capsEnUp);
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
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			let capRu = document.createElement('span');
			let capRuUp = document.createElement('span');
			let capsEn = document.createElement('span');
			let capsEnUp = document.createElement('span');
			let capsRu = document.createElement('span');
			let capsRuUp = document.createElement('span');
			langRu.classList.add('hidden');
			langRu.classList.add('langRu');
			langEn.classList.add('langEn');
			capEn.classList.add('en');
			capEnUp.classList.add('hidden');
			capEnUp.classList.add('enUp');
			capRu.classList.add('ru');
			capRuUp.classList.add('hidden');
			capRuUp.classList.add('ruUp');
			capsEn.classList.add('hidden');
			capsEn.classList.add('enCap');
			capsEnUp.classList.add('hidden');
			capsEnUp.classList.add('enCapS');
			capsRu.classList.add('hidden');
			capsRu.classList.add('ruCap');
			capsRuUp.classList.add('hidden');
			capsRuUp.classList.add('ruCapS');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp;
			capsEn.innerHTML = i.capEn;
			capsEnUp.innerHTML = i.capEnS;
			capsRu.innerHTML = i.capRus;
			capsRuUp.innerHTML = i.capRusS;
			langRu.append(capRu);
			langRu.append(capRuUp);
			langRu.append(capsRu);
			langRu.append(capsRuUp);
			langEn.append(capsEn);
			langEn.append(capsEnUp);
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
			langRu.classList.add('langRu');
			langEn.classList.add('langEn');
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			let capRu = document.createElement('span');
			let capRuUp = document.createElement('span');
			let capsEn = document.createElement('span');
			let capsEnUp = document.createElement('span');
			let capsRu = document.createElement('span');
			let capsRuUp = document.createElement('span');
			langRu.classList.add('hidden');
			capEn.classList.add('en');
			capEnUp.classList.add('hidden');
			capEnUp.classList.add('enUp');
			capRu.classList.add('ru');
			capRuUp.classList.add('hidden');
			capRuUp.classList.add('ruUp');
			capsEn.classList.add('hidden');
			capsEn.classList.add('enCap');
			capsEnUp.classList.add('hidden');
			capsEnUp.classList.add('enCapS');
			capsRu.classList.add('hidden');
			capsRu.classList.add('ruCap');
			capsRuUp.classList.add('hidden');
			capsRuUp.classList.add('ruCapS');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp;
			capsEn.innerHTML = i.capEn;
			capsEnUp.innerHTML = i.capEnS;
			capsRu.innerHTML = i.capRus;
			capsRuUp.innerHTML = i.capRusS;
			langRu.append(capRu);
			langRu.append(capRuUp);
			langRu.append(capsRu);
			langRu.append(capsRuUp);
			langEn.append(capsEn);
			langEn.append(capsEnUp);
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
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			let capRu = document.createElement('span');
			let capRuUp = document.createElement('span');
			let capsEn = document.createElement('span');
			let capsEnUp = document.createElement('span');
			let capsRu = document.createElement('span');
			let capsRuUp = document.createElement('span');
			langRu.classList.add('hidden');
			langRu.classList.add('langRu');
			langEn.classList.add('langEn');
			capEn.classList.add('en');
			capEnUp.classList.add('hidden');
			capEnUp.classList.add('enUp');
			capRu.classList.add('ru');
			capRuUp.classList.add('hidden');
			capRuUp.classList.add('ruUp');
			capsEn.classList.add('hidden');
			capsEn.classList.add('enCap');
			capsEnUp.classList.add('hidden');
			capsEnUp.classList.add('enCapS');
			capsRu.classList.add('hidden');
			capsRu.classList.add('ruCap');
			capsRuUp.classList.add('hidden');
			capsRuUp.classList.add('ruCapS');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp;
			capsEn.innerHTML = i.capEn;
			capsEnUp.innerHTML = i.capEnS;
			capsRu.innerHTML = i.capRus;
			capsRuUp.innerHTML = i.capRusS;
			langRu.append(capRu);
			langRu.append(capRuUp);
			langRu.append(capsRu);
			langRu.append(capsRuUp);
			langEn.append(capsEn);
			langEn.append(capsEnUp);
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
			let capEn = document.createElement('span');
			let capEnUp = document.createElement('span');
			let capRu = document.createElement('span');
			let capRuUp = document.createElement('span');
			let capsEn = document.createElement('span');
			let capsEnUp = document.createElement('span');
			let capsRu = document.createElement('span');
			let capsRuUp = document.createElement('span');
			langRu.classList.add('hidden');
			langRu.classList.add('langRu');
			langEn.classList.add('langEn');
			capEn.classList.add('en');
			capEnUp.classList.add('hidden');
			capEnUp.classList.add('enUp');
			capRu.classList.add('ru');
			capRuUp.classList.add('hidden');
			capRuUp.classList.add('ruUp');
			capsEn.classList.add('hidden');
			capsEn.classList.add('enCap');
			capsEnUp.classList.add('hidden');
			capsEnUp.classList.add('enCapS');
			capsRu.classList.add('hidden');
			capsRu.classList.add('ruCap');
			capsRuUp.classList.add('hidden');
			capsRuUp.classList.add('ruCapS');
			capEn.innerHTML = i.eng;
			capEnUp.innerHTML = i.engUp;
			capRu.innerHTML = i.rus;
			capRuUp.innerHTML = i.rusUp;
			capsEn.innerHTML = i.capEn;
			capsEnUp.innerHTML = i.capEnS;
			capsRu.innerHTML = i.capRus;
			capsRuUp.innerHTML = i.capRusS;
			langRu.append(capRu);
			langRu.append(capRuUp);
			langRu.append(capsRu);
			langRu.append(capsRuUp);
			langEn.append(capsEn);
			langEn.append(capsEnUp);
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