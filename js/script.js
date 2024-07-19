const dateElements = document.querySelectorAll('.js-date')

let currentDate = new Date()
let weddingDate = new Date(2024, 6, 21)      

let start = Date.parse(currentDate)
let end = Date.parse(weddingDate)

let day = 0

for(let i = start; i <= end; i = i + 24*60*60*1000){
        day++
}

dateElements[0].textContent = day 

if(day !== 0){
function updateClock(){
    const time = new Date()
    let hours = time.getHours().toString().padStart(2, '0')
    let minutes = time.getMinutes().toString().padStart(2, '0')
    let seconds = time.getSeconds().toString().padStart(2, '0')
    dateElements[1].textContent = hours
    dateElements[2].textContent = minutes 
    dateElements[3].textContent = seconds 
}

setInterval(updateClock, 1000)
updateClock()

}else {
    dateElements[0].textContent = '00'
    dateElements[1].textContent = '00'
    dateElements[2].textContent = '00'
    dateElements[3].textContent = '00'
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const containerImg = document.querySelectorAll('.img-container')
    const extend = document.querySelectorAll('.time-img-extend')
    extend[0].style.maxWidth = '100%'

    let currentIndex = 0

    function showSlide(index) {
        if (index >= containerImg.length) {
            currentIndex = 0
        } else if (index < 0) {
            currentIndex = containerImg.length - 1
        } else {
            currentIndex = index
        }

        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`

    }
    
    const hammertime = new Hammer(slides)
    
        hammertime.on('swipeleft', function() {
            if(currentIndex == 4) return
            showSlide(currentIndex + 1)
          
            extend[currentIndex].style.maxWidth = '100%'

            if(currentIndex == 0){
            extend[extend.length -1].style.maxWidth = '0%'
        }else{
            extend[currentIndex - 1].style.maxWidth = '0%'
        }

    })

    hammertime.on('swiperight', function() {
        if(currentIndex == 0) return
    
        showSlide(currentIndex - 1)

        extend[currentIndex].style.maxWidth = '100%'

        if(currentIndex == 4){
            extend[0].style.maxWidth = '0%'
        }else{
            extend[currentIndex + 1].style.maxWidth = '0%'
        }

    })

    
})