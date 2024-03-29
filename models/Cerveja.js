import {sequelize} from '../database.js'
import { DataTypes } from 'sequelize'

const Cerveja = sequelize.define('Cerveja', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abv: {
        type: DataTypes.FLOAT
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
       
},
{
    updatedAt: 'atualizacao',
    createdAt: false
}

)

export { Cerveja }