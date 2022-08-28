## Obtendo dados fakes da api Dmmyjson.com
 - ao dar git clone no terminal instale as dependências necessárias com yarn ou npm install no terminal
 - em seguida basta usar yarn dev ou npm run dev para.
 
 - Basicamente o programa obtem os dados de uma API falsa com autenticação,
 - Primeiro a função getToken é chamada, ele envia uma requisição via POST informando username e password e tem como resposta o token da requisição
 - com o token em mãos, a função getProducts é chamada tendo como parâmetro o token obtido, e se ele for válido a resposta da requisição será uma lista de produtos que é mostrado no console no final do programa.
