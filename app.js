// Importação de pacotes e arquivos
import express from 'express'
import cervejasRouter from './routes/cervejas.js'
import { sequelize } from './database.js'
import 'dotenv/config'

// Inicializando o pacote express
const app = express()

//realiza a criação das tabelas do bd (depois de criar o Model)
try{
    await sequelize.sync()
}catch (err) {
    console.log(err)
}

// Configurando o reconhecimento de JSON
app.use(express.json())

// Utilizando o arquivo de rotas importado na linha 3
app.use(cervejasRouter)

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Servidor iniciado'))