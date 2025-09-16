// importar as funções 
const { retornarUsuarios, addNovoUsuario } = require ('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe ('Testar as funções de Gestão de Usuários', function (){
    it ('validar que posso adicionar um novo nome de usuário a lista', function (){
        // 1. Add um novo nome a lista de usuários
        addNovoUsuario({
            nome: 'Raquel',
            email: 'raquel@email.com'
        });

        // 2. Retornar a lista de usuários na caixa "lista de usuários"
        const listaDeUsuarios = retornarUsuarios(); 

        // 3. Compare se o novo nome esta no fim da lista de usuários
        // at(-1) retorna o ultimo item da lista. E o primeiro nome seria at(0)
        // expect(ListaDeUsuarios.at(-1).nome).to.equal('Raquel');
        // expect(ListaDeUsuarios.at(-1).email).to.equal('raquel@email.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Raquel',
            email: 'raquel@email.com'
        });      
    });
});