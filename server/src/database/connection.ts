import knex from 'knex'
import path from 'path' //para trabalhar com caminhos, padroniza para o caminho funcionar em todos os SOs

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection