const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

/*knex('users').insert({
    name: 'teste',
    email: 'teste@teste.com.br',
    password: 'teste'
}).then(data => console.log(data))*/

knex('users').then(resultado => console.log(resultado))