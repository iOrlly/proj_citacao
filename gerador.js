const citacoes = [
    {
        texto: "Aquilo que não me mata, fortalece-me.",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "Aquele que luta com monstros deve acautelar-se para não se tornar também um monstro. E se tu olhares durante muito tempo para um abismo, o abismo também olha para dentro de ti.",
        autor:"Friedrich Nietzsche",
    },
    {
        texto: "Deus está morto! E nós o matamos!",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "Sem música, a vida seria um erro.",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "A persistência é o caminho do êxito.",
        autor: "Charles Chaplin"
    },
    {
        texto: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        autor: "Albert Einstein"
    },
    {
        texto: "Acredite que você pode, assim você já está no meio do caminho.",
        autor: "Theodore Roosevelt"
    },
    {
        texto: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
        autor: "Roberto Shinyashiki"
    },
    {
        texto: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        autor: "Robert Collier"
    }

];
console.log(citacoes.length)

function gerarCitacao() {
    //const textoCitacoes = document.getElementById('citacao')
    const gerar = Math.floor(Math.random() * citacoes.length); //informa o tamanho do arrey

    const citacaoSorteada = citacoes[gerar]; // = citacoes[gerar]; é o caminho que a variável citacaoSorteada vai percorer para pegar o objeto

    document.getElementById('textoCitacao').innerHTML = `"${citacaoSorteada.texto}"`;
    document.getElementById('autor').innerHTML = `-${citacaoSorteada.autor}`;
}