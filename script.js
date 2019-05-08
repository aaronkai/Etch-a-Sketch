function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


const sketchpad = document.querySelector('#sketchpad');

//create 16x16 grid
for (i = 1; i <= 16 * 16; i++) {
	var box = document.createElement('div');
	box.classList.add('item');
	box.textContent = `${i}`;
	sketchpad.appendChild(box);
}

var boxes = document.querySelectorAll('.item');
boxes.forEach((box) => {
	box.addEventListener('mouseenter', (e) => {
		var color = getRandomColor();
		e.target.style.background = `${color}`;
	});
});

//lets make a reset button and redraw the grid
var resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => {
	var newGrid = prompt("What size would you like the new grid to be?");
	if (!isNaN(newGrid)) {
		boxes.forEach((box) => {
			box.remove();
		})
		sketchpad.innerHTML = `<style>#sketchpad {
			grid-area: main; 
			display: grid;	
			grid-template-columns: repeat(${newGrid}, 1fr) !important;	
			grid-template-rows: repeat(${newGrid}, 1fr) !important;} 
			</style>`
		for (i = 1; i <= newGrid * newGrid; i++) {
			var box = document.createElement('div');
			box.classList.add('item');
			box.textContent = `${i}`;
			sketchpad.appendChild(box);
		}
		boxes = document.querySelectorAll('.item');
		boxes.forEach((box) => {
			box.addEventListener('mouseenter', (e) => {
				var color = getRandomColor();
				e.target.style.background = `${color}`;
			});
		});
	}
});