console.log("Nada de olá mundo hj");
console.warn("Eu sou um alerta de erro");
console.error("Eu sou um alerta de erro - cuidado!");

var idade = 28; //inteiro
var nome = "david"; //string
var salario = 980.99; //double ou float
var pais = ["Oscar","Dona Cida"]; //vetor
var veiculo = { //objeto
    tipo: "Carro",
    ano: 2012,
    marca: "Fiat",
    valor: 100.99,
    motor: {
        cilindros: 4,
        valvulas: 16
    }
}

var namoradas = [ //vetor de objetos
    {
        nome: "Bruna Marquesine",
        idade: 28
    },
    {
        nome: "Anitta",
        idade: 28
    }
]

var objetoTeste = [
    [{
    nome: "david",
    idade: 12
    }],
    ["David"],
    [12,12]
]






//var relatorio = nome + " tem " + idade + " anos e recebe " + salario + " de salario" ;
var relatorio = `${nome} filho de ${pais[0]} e ${pais[1]}  tem ${idade}
 anos e recebe ${salario} de salário. Comprou um/uma ${veiculo.tipo} 
 da marca ${veiculo.marca} e do ano ${veiculo.ano} 
 com motor de ${veiculo.motor.cilindros} cilindros por R$${veiculo.valor}. Comprou
 para sair com ${namoradas[0].nome}`;

console.log(idade)
console.log(nome);
console.log(salario);
console.log(relatorio);
console.log(pais);
console.log(pais.length);
console.log(veiculo);
console.log(namoradas);
console.log(objetoTeste);


var num1 = 10;
var num2 = 10;

console.log(num1+num2); //60
console.log(num1-num2); //40
console.log(num1*num2) //500
console.log(num1/2); //5
console.log(num1%2); //0
console.log(num1+nome); //10david

console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2); //
console.log(num1<=num2); //menor ou igual
console.log(num1===num2);//igual até no tipo
console.log(num1!=num2); //diferente








