let offset = 0;

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').onclick = () => {
    offset += 256;
    if(offset > 265*3) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px'; 
}