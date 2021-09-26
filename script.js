const btn = document.getElementById('btn')
const boxes = document.getElementById('boxes')

createBoxes()

btn.addEventListener('click', () => boxes.classList.toggle('big'))

function createBoxes() {
	for(i = 0; i < 4; i++){
		for(j = 0; j < 4; j++){
			const box = document.createElement('div')
			box.classList.add('box')
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

			boxes.append(box)
		}
	}
}

