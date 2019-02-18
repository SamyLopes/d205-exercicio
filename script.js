let palavra = "Paralelepípedo";
let quantidadeErros = 0;
let quantidadeAcertos = 0;

let tentativa = document.querySelector("#letraDigitada");

tentativa.addEventListener("change", acertouPalavra);

function acertouPalavra() {
    let acertouPalavra;
    let letraDigitada = tentativa.value.toLowerCase();
    for(let i=0; i < palavra.length; i++){
        let letra = palavra[i].toLowerCase();        

        if(letraDigitada == letra){
            document.querySelector("#letra" + (i+1)).innerHTML = letraDigitada.toUpperCase();
            tentativa.value = "";
            acertouPalavra = true;            
            quantidadeAcertos++;
        }
    }

    if (!acertouPalavra) {
        alert("Você errou a letra!");
        
        quantidadeErros += 1;
        document.querySelector("#erro" + (quantidadeErros)).classList.remove("oculta");
        document.querySelector(".letras-erradas").innerHTML += letraDigitada.toUpperCase() + " ";

        if (quantidadeErros == 6) {
            alert("Você atingiu a quantidade máxima de erros!");
            tentativa.readOnly = true;
        }
    }

    if (quantidadeAcertos == palavra.length){
        alert("PARABÉNS!!!! Você conseguiu.");
        tentativa.readOnly = true;
    }
}
