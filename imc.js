const calcular = document.getElementById('calcular')


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso / (altura*altura)).toFixed(1);
        
        let classificaçãoImc = '';
        if (valorImc < 18.5) {
            classificaçãoImc = 'abaixo do peso.';
        }else if (valorImc < 25) {
             classificaçãoImc = 'com o peso ideal. Parabéns!!!';
        }else if (valorImc <30) {
            classificaçãoImc = 'levemente acima do peso...';
        }else if (valorImc <35) {
            classificaçãoImc = 'com Obesidade Grau 1.';
        }else if (valorImc <40) {
            classificaçãoImc ='com Obesidade Grau 2.';
        }else {
            classificaçãoImc = 'com Obesidade Grau 3. Cuidado!';
        }
        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificaçãoImc}`
    } else {
        resultado.textContent = 'Preencha todos os campos.'
    }
}

calcular.addEventListener('click',imc)