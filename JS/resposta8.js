let valorporhoras = prompt('Quanto você ganha por hora trabalhada');
let horastrabalhadas = prompt('Quantas horas voce trabalha ao mes');

//--------------------------------------------

valorporhoras = parseInt(valorporhoras);
horastrabalhadas = parseInt(horastrabalhadas);

//-----------------------------------------

let multiplicacao = valorporhoras * horastrabalhadas;

//--------------------------------

alert('Seu salario atual  ' + multiplicacao);
