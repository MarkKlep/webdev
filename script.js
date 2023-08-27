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

document.querySelector('.b-6').addEventListener('click', ()=>{
    const data = document.querySelector('.inp-6').value;
    if(document.querySelector('.inp-6').checked) {
        document.querySelector('.out-6').innerHTML = 'off';
        document.querySelector('.inp-6').checked = false;
    } 
    else {
        document.querySelector('.out-6').innerHTML = data;
        document.querySelector('.inp-6').checked = true;
    }
})

document.querySelector('.b-7').addEventListener('click', ()=>{
    const data = document.querySelector('.inp-7').value;
    document.querySelector('.out-7').innerHTML = data;
})

document.querySelector(".b-7").addEventListener('click', ()=>{
    const radio = document.querySelectorAll(".inp-7");
    let data;
    for(let i=0; i< radio.length; i++) {
        if(radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.querySelector('.out-7').textContent = data;
})


document.querySelector(".s-8").addEventListener('change', ()=>{
    const data = document.querySelector(".s-8").value;
    document.querySelector('.out-8').textContent = data;
});