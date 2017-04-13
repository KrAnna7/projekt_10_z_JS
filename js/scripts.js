// plik scripts.js
var dodajNowyElement = document.getElementById('addElem');
	list = document.getElementById('list');
	pozycjeNaLiscie = document.getElementsByTagName('li');
	iloscElemListy = pozycjeNaLiscie.length;

function dodajElemDoListy(k) {
	list.innerHTML += '<li>item' + k +'</li>';
}

dodajNowyElement.addEventListener('click', function(e) {
	dodajElemDoListy(iloscElemListy);
	iloscElemListy ++;
});
