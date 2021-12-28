const start = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const time = document.querySelector('#time')
const board = document.querySelector('#board')

let timer = 0
let score = 0

start.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        timer = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createCircle()
    }
})

function startGame() {
    setInterval(startTimer, 1000)
    createCircle()
    setTime(timer)
}

function startTimer() {    
    if (timer === 0) {
        finishGame()
    } else {
        let current = --timer
        if (timer < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    time.innerText = `00:${value}`
}

function createCircle() {
    let circle = document.createElement('div')
    const colors = ['#493657', '#CE7DA5', '#BEE5BF', '#DFF3E3', '#FFD1BA']
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = colors[getRandomNumber(0, colors.length)]
    board.append(circle)
}

function finishGame() {
    time.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`
    
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}