let offset = 0;

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').onclick = () => {
    offset += 256;
    if(offset > 768) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
}

//========================INPout====================================


document.querySelector('.b-1').onclick = () => {
    const data = document.querySelector('.inp-1').value;
    if(data.trim().length) {
        document.querySelector(".out-1").textContent = data;
        document.querySelector('.inp-1').value='';
    }
}