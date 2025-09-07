// importar as funções 
const { retornarUsuarios, addNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe ('Testar as funções de Gestão de Usuários', function (){
    it ('validar que posso adicionar um novo nome de usuário a lista', function (){
        // 1. Add um novo nome a lista de usuários
        addNovoUsuario('Raquel');

        // 2. Retornar a lista de usuários na caixa "lista de usuários"
        const listaDeUsuarios = retornarUsuarios(); 

        // 3. Verificar se o novo nome está no fim da "lista de usuários"
        expect(listaDeUsuarios.at(-1)).to.equal('Raquel');
        // at(-1) retorna o ultimo item da lista. E o primeiro nome seria at(0)
    });
});