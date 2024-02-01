import dotenv from 'dotenv'
dotenv.config()

import {Sequelize} from 'sequelize'
const sequelize = new Sequelize(process.env.BANCO_DE_DADOS)

//testa a conexão
try {
    await sequelize.authenticate() 
    console.log('Conexao bem sucedida')
} catch (erro) {
    console.log(erro)
}

export {sequelize}