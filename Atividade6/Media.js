var nome = prompt("Digite o nome do aluno");

var nota1 = prompt("Digite a primeira nota");
var nota2 = prompt("Digite a segunda nota"); 
var nota3 = prompt("Digite a terceira nota"); 

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert("A média do aluno " + nome + " é " + media); 
