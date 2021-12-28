const board = document.querySelector('#board')
const colors = ['#95190C', '#610345', '#107E7D', '#044B7F', '#446787', '#84828F']
const SQUARE_COUNT = 400


for (let i = 0; i < SQUARE_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', addColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function addColor(event) {
    const element = event.target
    let color = choseCOlor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#4F5D75'
    element.style.boxShadow = '0 0 2px #2D3142'
}

function choseCOlor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
