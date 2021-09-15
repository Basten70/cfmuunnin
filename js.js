const fahreinheitSyote=document.querySelector('input');
const fahrenheitTuloste=document.querySelector('#fahrenheit');
const celsiusTuloste=document.querySelector('#celsius');
const muunnaButton=document.querySelector('button');

function fahrenheitCelsiukseksi(fahrenheit){
    let celsius=fahrenheit;
    return celsius;
}
function muunna(){
    let syote=fahreinheitSyote.value;
    fahrenheitTuloste.textContent=syote;
    celsiusTuloste.textContent=fahrenheitCelsiukseksi(syote);
}

muunnaButton.addEventListener('click', muunna);