// console.log("Nada de olá mundo hj");
// console.warn("Eu sou um alerta de erro");
// console.error("Eu sou um alerta de erro - cuidado!");

// //variaveis, tipos de dados e concatenação 
// var idade = 28; //inteiro
// var nome = "david"; //string
// var salario = 980.99; //double ou float
// var pais = ["Oscar","Dona Cida"]; //vetor
// var veiculo = { //objeto
//     tipo: "Carro",
//     ano: 2012,
//     marca: "Fiat",
//     valor: 100.99,
//     motor: {
//         cilindros: 4,
//         valvulas: 16
//     }
// }

// var namoradas = [ //vetor de objetos
//     {
//         nome: "Bruna Marquesine",
//         idade: 28
//     },
//     {
//         nome: "Anitta",
//         idade: 28
//     }
// ]

// var objetoTeste = [
//     [{
//     nome: "david",
//     idade: 12
//     }],
//     ["David"],
//     [12,12]
// ]

// //var relatorio = nome + " tem " + idade + " anos e recebe " + salario + " de salario" ;
// var relatorio = `${nome} filho de ${pais[0]} e ${pais[1]}  tem ${idade}
//  anos e recebe ${salario} de salário. Comprou um/uma ${veiculo.tipo} 
//  da marca ${veiculo.marca} e do ano ${veiculo.ano} 
//  com motor de ${veiculo.motor.cilindros} cilindros por R$${veiculo.valor}. Comprou
//  para sair com ${namoradas[0].nome}`;

// console.log(idade)
// console.log(nome);
// console.log(salario);
// console.log(relatorio);
// console.log(pais);
// console.log(pais.length);
// console.log(veiculo);
// console.log(namoradas);
// console.log(objetoTeste);


// var num1 = 10;
// var num2 = 10;

// console.log(num1+num2); //60
// console.log(num1-num2); //40
// console.log(num1*num2) //500
// console.log(num1/2); //5
// console.log(num1%2); //0
// console.log(num1+nome); //10david

// console.log(num1>num2);
// console.log(num1<num2);
// console.log(num1>=num2); //
// console.log(num1<=num2); //menor ou igual
// console.log(num1===num2);//igual até no tipo
// console.log(num1!=num2); //diferente

//Funções
// function soma(a,b){
//     return a+b;
// }
// function subtracao(a,b){
//     return `O resultado de ${a} - ${b} é ${a-b}`;
// }
// function multiplicacao(a,b){
//     return `O resultado de ${a} 8 ${b} é ${a/b}`;
// }
// function divisao(a,b){
//     return `O resultado de ${a} / 
//     ${b} é ${a+b}`;
// }



// function mostrarMessagem(){
//     alert("Oi! Eu sou o Goku!");
// }

// var dado = {
//     resultadoSoma: (soma(78,4))
// }

// console.log(dado);


// var a = 9;
// var b = 7;

// console.log(`O resultado de
//  ${a} + ${b} é ${soma(a,b)}`);
// console.log(subtracao(24,43));
// console.log(multiplicacao(22,63));
// console.log(divisao(12,83));


//Faça um algoritmo que calcule o valor
/**liquido do saladio de um funcionario
 * sabendo que necessita descontar 11% do
 * inss e 6% do imposto de renda.
 * 
 * exiba na tela o valor líquido do salario
 * use funções
 * 
 * pegarSalarioBruto
 * calcularINSS para:
 * salario <=2000 é 8%;
 * salario >2000 e <3000 é 9%
 * salario >=3000 é 11%
 * 
 * calcularIR
 * salario <=1000 é isento;
 * salario >1000 e <3000 é 10%
 * salario >=3000 e <10000 é 15%
 * salario >=10000 é 50%
 * 
 * exibirSalario
 */
function pegarSalario() { //Simular o BD
    var salario = 10000;
    return salario;
}

function calcularIR() {
    if (pegarSalario() <= 1000) {
        //console.log("ISENTO");
        return 0;
    } else if (pegarSalario() > 1000 && pegarSalario() < 3000) {
        // console.log("sua aliquota de IR é de 10%");
        return pegarSalario() * 0.10;
    } else if (pegarSalario() >= 3000 && pegarSalario() < 10000) {
        // console.log("sua aliquota de IR é de 15%");
        return pegarSalario() * 0.15;
    } else if (pegarSalario() >= 10000) {
        // console.log("sua aliquota de IR é de 50%");
        return pegarSalario() * 0.5;
    }
}


function calcularINSS() {
    if (pegarSalario() <= 2000) {
        //console.log("sua aliquota de INSS é de 8%");
        return pegarSalario() * 0.08;
    } else if (pegarSalario() > 2000 && pegarSalario() < 3000) {
        //console.log("sua aliquota de INSS é de 9%");
        return pegarSalario() * 0.09;
    } else if (pegarSalario() >= 3000) {
        //console.log("sua aliquota de INSS é de 11%");
        return pegarSalario() * 0.11;
    }
}

function exibirSalario() {
    //console.log("salario = " + pegarSalario());
    //console.log("INSS  = " + calcularINSS());
    //console.log("IR = " + calcularIR());
    return pegarSalario() - calcularINSS() - calcularIR();
}
//console.log(exibirSalario());


// var idade = 18;
// var genero = 'F';

// if (!(idade >= 18 || genero == 'F')) {
//     console.log("é maior OU é mulher comum");
// } else
//     if (idade >= 18 || genero == 'M') {
//         console.log("é maior OU é homem comum");
//     } else
//         if (idade < 18) {
//             console.log("é de menor");
//         } else {
//             console.log("Qualquer coisa...")
//         }


// switch (genero) {
//     case 'GF':
//         console.log('Gênero Fluido');
//         break;
//     case 'NB':
//         console.log('Não binário');

//         break;
//     case 'M':
//         console.log('Masculino');

//         break;
//     case 'F':
//         console.log('Feminino');

//         break;

//     default:
//         console.log("vai passar maaaaaal");
//         break;
// }


//Condicionais

var quantidaNumeros = 10;
var vet=[];
for (i=0;i < quantidaNumeros; i++) {
    //console.log(`O indice i=${i} do vetor vet[${i}]vai receber o valor ${i+1}`);
    vet[i]=i+1;
}

function contarPares(){ //retorna a quantidade de numeros pares
    var contPares = 0; //armazenar a quantidade de pares no vetor
    for(i=0; i<vet.length; i++){ //varrer o vetor vet
        if(vet[i]%2==0){ //se a posicao do vetor for par, contPares incrementa 1
            console.log("achou um par" + vet[i]);
            contPares++; //contPares = contPares+1;
        }
    }
    console.log(contPares + " numeros pares");
    return contPares;
}

function contarImpares(){ //retorna a quantidade de numeros pares
    var contImpares = 0; //armazenar a quantidade de pares no vetor
    for(i=0; i<vet.length; i++){ //varrer o vetor vet
        if(vet[i]%2==1){ //se a posicao do vetor for par, contImpares incrementa 1
            console.log("achou um impar" + vet[i]);
            contImpares++; //contImpares = contImpares+1;
        }
    }
    console.log( contImpares+ " numeros Imprares");
    return contImpares ;
}



var vetPar=[];
var vetImpar=[];

for (i=0, y=0, x=0;i < vet.length; i++) {
    if(vet[i]%2==0){
        vetPar[y]=vet[i];
        y++;
    }else{
        vetImpar[x]=vet[i];
        x++;
    }
}

var vetor = {
    vet:[],
    pares: 0,
    impares: 0,
}

console.log(vet);
console.log(vetPar);
console.log(vetImpar);

// var j=10;

// while(j>=1){
//     console.log(j);
//     j--;
// }
// console.log(" ");

// var k=1;
// do{
//     console.log(k);
//     k++;
// }while(k<=10);















