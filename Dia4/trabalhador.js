class Trabalhador {
    constructor(name, idade, horas, profissao) {
        this._name = name;
        this._idade = idade;
        this._horas = horas;
        this._profissao = profissao;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        this._idade = idade;
    }

    get profissao() {
        return this._profissao;
    }

    set profissao(profissao) {
        this._profissao = profissao;
    }

    get horas() {
        return this._horas;
    }

    set horas(horas) {
        this._horas = horas;
    }

    addHora(hora) {
        this._horas += hora;
    }

    descricao() {
        return `Meu nome e ${this._name}, tenho ${this._idade} anos
        e sou ${this._profissao}`
    }

    descricaoHoras() {
        return `Ate agora trabalhei ${this._horas} horas`
    }
}

let trabalhador = new Trabalhador('Joao', 18, 4, 'Engenheiro');
console.log(trabalhador.descricao());
console.log(trabalhador.descricaoHoras());
trabalhador.name = 'Diego';
trabalhador.idade = '26';
trabalhador.horas = 6;
console.log(trabalhador.descricao());
trabalhador.addHora(8);
console.log(trabalhador.horas);