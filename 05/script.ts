const soletrar = (palavra: string): string => {
    const letras: string [] = palavra.split("");
    const letrasSeparadas: string = letras.join("-");

    return letrasSeparadas;
}

console.log(soletrar('alfabeto'));