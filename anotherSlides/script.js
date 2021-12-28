const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slides = mainSlide.querySelectorAll('div').length
let slideCount = 0

sidebar.style.top = `-${(slides - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    let screen =  document.querySelector('.container').clientHeight
    if (direction === 'up') {
        slideCount++

        slideCount === slides ? slideCount = 0 : false
    } else if (direction === 'down') {
        slideCount--

        slideCount < 0 ? slideCount = slides - 1 : false
    }

    mainSlide.style.transform = `translateY(-${slideCount * screen}px)`
    sidebar.style.transform = `translateY(${slideCount * screen}px)`
}

console.log(sidebar)