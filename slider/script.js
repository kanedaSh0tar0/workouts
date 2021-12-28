const active = document.querySelectorAll('.shoes')

const activeItem = function(item) {
    active[item].classList.add('active')

    for (let model of active) {

        model.addEventListener('click', () => {
            hideActive()
            
            model.classList.add('active')
        })
    }
    
    function hideActive() {
        active.forEach(item => {
            item.classList.remove('active')
        })
    }    
}

activeItem(1)
