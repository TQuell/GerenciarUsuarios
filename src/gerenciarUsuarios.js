//const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

// criando uma lista. 
const usuarios = [
    {
        nome: 'Mateus',
        email: 'marcos@email.com'
    },

    {
        nome: 'Marcos',
        email: 'marcos@email.com'
    },

    {
        nome:'Lucas',
        email: 'lucas@email.com'
    },

    {
        nome: 'João',
        email: 'joao@email.com'
    }
    
];


// criei uma função para retornar os nomes da lista. Mesmo minha constante estando fora da função. 
function retornarUsuarios() { 
    return usuarios;
}

// função para adicinar novo usuário à lista.
// o push só vale para variável do tipo lista
// "nome" representa o nome que o suário irá passar. 
function addNovoUsuario(usuarios) {
    usuarios.push(usuarios);
}

module.exports = {
    retornarUsuarios, 
    addNovoUsuario
}