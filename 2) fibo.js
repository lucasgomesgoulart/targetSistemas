const labelResposta = document.getElementById('resposta');

const fibo = () => {
  const numeroUser = parseInt(document.getElementById('inputNumero').value);

  if (numeroUser > 0) {
    let primeiroNumero = 1;
    let segundoNumero = 1;
    let termo = 0;

    if (numeroUser === 1 || numeroUser === 2) {
      termo = 1;
    } else {
      for (let i = 3; i <= numeroUser; i++) {
        const numero = primeiroNumero + segundoNumero;
        [primeiroNumero, segundoNumero] = [segundoNumero, numero];
        termo = numero;
      }
    }

    labelResposta.innerHTML = `O termo da sequência é: ${termo}`;
  } else {
    alert('Insira um número maior que 0');
  }
}