function helloWorld(){
    console.log("Olá mundo")
}

function imprimirTexto(texto){
    console.log(texto);
}
const funcao = imprimirTexto;

console.log(typeof(funcao))

funcao("Teste");

const olaMundo = () => {
    console.log("Olá mundo")
}

console.log(typeof(olaMundo));
olaMundo();

const soma = (x, y) => {
    console.log(x + y);
}

//soma(10, 22)

const showModal = (tituloModal, acaoOk, acaoCancel) => {
    console.log(tituloModal); //exibindoModal
    acaoCancel();
}

function acaoAoCancelar(){
    console.log("pressionou cancelar");
}

showModal("Minha janela", () => {console.log("pressionou ok")}, acaoAoCancelar);

const pessoa = {
    nome: "José",
    sobreNome: "Silva"
};

console.log(pessoa.nome)