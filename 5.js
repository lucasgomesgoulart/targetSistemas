const palavra = 'Aprovado'

const reverse = (palavra) =>{
      for(let i = palavra.length - 1; i >= 0; i--){
        palavraReverse += palavra[i]
      }  
      console.log(palavraReverse)
}

