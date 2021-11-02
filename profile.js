function favColor(evt) {
	evt.preventDefault();
    window.alert('Blue')
}
let color = document.getElementById('color')

color.addEventListener('click', favColor);

function favPlace(evt) {
	evt.preventDefault();
    window.alert('Home')
}
let place = document.getElementById('place')

place.addEventListener('click', favPlace);

function favRitual(evt) {
	evt.preventDefault();
    window.alert('Walking')
}
let ritual = document.getElementById('ritual')

ritual.addEventListener('click', favRitual);