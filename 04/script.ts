const gerarEtiqueta = (produtoRecebido: {produto: string, lote: number, ano: number, qtd: number}): string [] => {
    const etiquetas: string [] = [];

    let i: number = 1;

    while(i <= produtoRecebido.qtd){
        etiquetas.push(`${produtoRecebido.lote}-${produtoRecebido.ano}-00${i}`);
        i++;
    }

    return etiquetas;
};

console.log(gerarEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));