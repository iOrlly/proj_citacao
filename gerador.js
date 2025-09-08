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
    }

];

function gerarCitacao() {
    //const textoCitacoes = document.getElementById('citacao')
    const gerar = Math.floor(Math.random() * citacoes.length);

    const citacaoSorteada = citacoes[gerar];

    document.getElementById('textoCitacao').innerHTML = `"${citacaoSorteada.texto}"`;
    document.getElementById('autor').innerHTML = `-${citacaoSorteada.autor}`;
}