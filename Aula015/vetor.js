let valores = [23, 6, 16, 19, 22, 5]
    for (let pos= 0; pos < valores.length; pos++)
// FOR tem 3 elementos : inicializacao, teste logico e incremento. todos separados por ponto e virgula  
console.log(`A posicao ${pos} tem o valor de ${valores[pos]}.`)

for (let pos in valores)
//FOR IN = tem 2 elementos. For mais SIMPLIFICADOS. Otimizado para Variaveis Compostas e Objetos 
console.log(`A posicao ${pos} tem o valor de ${valores[pos]}.`)
