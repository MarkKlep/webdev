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

document.querySelector('.b-2').addEventListener('click', ()=>{
    const data = document.querySelector(".inp-2").value;
    if(data){
        document.querySelector(".out-2").textContent = data;
        document.querySelector(".inp-2").value = '';
    }
})