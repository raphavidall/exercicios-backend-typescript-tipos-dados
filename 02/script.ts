const usuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscaNome = (lista: {nome:string, idade: number, status: boolean }[], nome: string) => {
    const usuariosEncontrados: {nome:string, idade: number, status: boolean }[] = [];

    const termoBuscaLowerCase = nome.toLowerCase();

    for (const usuario of usuarios){

        const nomeUsuarioLowerCase = usuario.nome.toLowerCase();

        if(nomeUsuarioLowerCase.includes(termoBuscaLowerCase)){
            usuariosEncontrados.push(usuario);
        }
    }

    return usuariosEncontrados;
}

console.log(buscaNome(usuarios, 'Jo'));