let Nota1 = prompt('Digite a Nota 1');
let Nota2 = prompt('Digite a Nota 2');
let Nota3 = prompt('Digite a Nota 3');
let Nota4 = prompt('Digite a Nota 4');

//--------------------------------------------------

Nota1 = parseInt(Nota1);
Nota2 = parseInt(Nota2);
Nota3 = parseInt(Nota3);
Nota4 = parseInt(Nota4);


//---------------------------------------------------

let soma = Nota1 + Nota2 + Nota3 + Nota4;
let divisao = soma / 4;

//---------------------------------------------------
alert('O resultado e ' + divisao);