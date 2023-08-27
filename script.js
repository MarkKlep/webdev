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
    const data = +document.querySelector(".inp-2").value; //number not string due to +
    console.log(data + 10);
    if(data) {
        document.querySelector(".out-2").textContent = data;
        document.querySelector(".inp-2").value = '';
    }
})

document.querySelector('.b-3').addEventListener('click', ()=>{
    const data = document.querySelector('.inp-3').value;
    document.querySelector('.out-3').textContent = data;
})

document.querySelector('.b-4').addEventListener('click', ()=>{
    const data = document.querySelector('.inp-4').value;
    if(data)
        document.querySelector('.out-4').innerText = data;
})


document.querySelector('.inp-5').addEventListener('input', ()=>{
    const data = document.querySelector('.inp-5').value;
    document.querySelector('.out-5').innerHTML = data;
})