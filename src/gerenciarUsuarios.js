// criando uma lista. 
const usuarios = ['Mateus', 'Marcos', 'Lucas', 'João']; 

// criei uma função para retornar os nomes da lista. Mesmo minha constante estando fora da função. 
function retornarUsuario() { 
    return usuarios;
}
// qualquer coisa
// função para adicinar novo usuário à lista.
// o push só vale para variável do tipo lista
// "nome" representa o nome que o suário irá passar. 
function addNovoUsuario(nome) {
    usuarios.push(nome);
}

Module.exports = {
    retornarUsuario, 
    addNovoUsuario
}