type Pessoa = {
    nome: string,
    idade: number,
    profissao: 'atriz' | 'padeiro'
}

const pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: "atriz"
};

const pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: "padeiro"
};

const pessoa3: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: "atriz"
};

const pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}

console.log(pessoa2.idade);
console.log(pessoa3.profissao);
