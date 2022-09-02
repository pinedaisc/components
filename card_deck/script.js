const $ = selector => document.querySelector(selector)

const wrapper = $('.card-container')
const container = $('.container')


const {width, height} = wrapper.getBoundingClientRect()
const halfWidth = width  / 2
const halfHeight = height / 2

wrapper.addEventListener('mousemove', event => {
    const {offsetX, offsetY}  = event
    
    const rotationX  = ((offsetX - halfWidth) / halfWidth) * 10
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10
    console.log(rotationX, rotationY)

    container.style.transform = 'rotateX(${rotationX}deg) rotateY(${rotationY}deg)'
    

})