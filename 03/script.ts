const imprimirTabuada = (lista: number[]): void => {
    
    for (const numero of lista){
        for(let i = 0; i <=10; i++){
            console.log(`${numero} x ${i} = ${numero*i}`);
        }
        console.log('-----------------');
    }

}

imprimirTabuada([1, 3, 4]);