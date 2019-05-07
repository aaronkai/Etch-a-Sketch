function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


const container = document.querySelector('#container');

//create 16x16 grid
for (i = 1; i <= 16 * 16; i++) {
	var box = document.createElement('div');
	box.classList.add('item');
	box.textContent = `${i}`;
	container.appendChild(box);
}

var boxes = document.querySelectorAll('.item');
boxes.forEach((box) => {
	box.addEventListener('mouseenter', (e) => {
			var color = getRandomColor();
			e.target.style.background = `${color}`;
		});
});