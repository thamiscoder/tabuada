function verificar() {
    let num = document.getElementById('txtn').value;
    let res = document.getElementById('res');
    res.innerHTML = '';

    num = Number(num); //Converter "num" para número

    if (num == 0) {
        window.alert('Dado Inválido');   
    } else {
        for (let i = 0; i < 10; i++) {
            let result = num * (i + 1);
            res.innerHTML += ` ${i} x ${num} = ${result} <br>`;
        }
    }
    
}