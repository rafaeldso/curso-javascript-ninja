/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var qualquer = [1, 'Rafael', true, null, 1.2]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function retornaArray(param){
    return param;
}
retornaArray([1,2,3,4])
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
retornaArray([1,2,3,4])[1]
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function retornaArray1(param,param1){
    return param[param1];
}
retornaArray1([1,2,3,4],1)
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var varArray = [1, 'Rafael', true, null, 1.2];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
retornaArray1([1,2,3,4],([1,2,3,4].length-1))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(nameBook){
    var objBook = {
        nomeLivro1:{
            quantidadePaginas: 10,
            autor: 'Desconhecido1',
            editora: 'Padrão1'
        },
        nomeLivro2:{
            quantidadePaginas: 20,
            autor: 'Desconhecido2',
            editora: 'Padrão2'
        },
        nomeLivro3:{
            quantidadePaginas: 30,
            autor: 'Desconhecido3',
            editora: 'Padrão3'
        }
    };
    if(nameBook === null, nameBook === undefined) {
        return objBook
    }
    return objBook[nameBook]
}
book('nomeLivro2')

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
"O livro nomeLivro2 tem "+book('nomeLivro2').quantidadePaginas+" páginas!"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
"O autor do livro nomeLivro2 é "+book('nomeLivro2').autor+"."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
"O livro nomeLivro2 foi publicado pela editora "+book('nomeLivro2').editora+"."
