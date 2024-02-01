import { Cerveja } from "../models/Cerveja.js";

const getCervejas = async (req, res) => {
    try {
        const cervejas = await Cerveja.findAll()
        res.status(200).send({ message: "Cervejas encontradas", data: cervejas })

    } catch (err) {
      res.status(500).send({ message: 'Houve um erro na busca' })
    }
}

const criarCerveja = async (req, res) => {
    try {
        const { nome, abv, tipo, nacionalidade } = req.body

        if(!nome || !abv || !tipo || !nacionalidade ){
            res.status(400).send({ message: 'Dados incompletos' })
        }

        const novaCerveja = { nome, abv, tipo, nacionalidade }
        const resultado = await Cerveja.create(novaCerveja)
        res.status(201).send({ message: 'Cerveja criada com sucesso', data: resultado })

    }catch (err) {
        res.status(500).send({ message: 'Houve um erro na criacao'  });
    }
}

const atualizarCerveja = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, abv, tipo, nacionalidade } = req.body

        if (!nome || !abv || !tipo || !nacionalidade || !id) {
            res.status(400).send({ message: 'Dados incompletos' })
        }

        const cervejaAtualizada = { nome, abv, tipo, nacionalidade }
        const resultado = await Cerveja.update(cervejaAtualizada, { where: { id: id } })
        res.status(200).send({ message: 'Cerveja atualizada', resultado: resultado })

    } catch (err) {
        res.status(500).send({ message: 'Erro na atualizacao' })
    }
}

const apagarCerveja = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(404).send({ message: 'Id nao informado' })
        }

        await Cerveja.destroy({ where: { id: id } })
        res.status(200).send({ message: 'Cerveja excluida' })

    } catch (err) {
        res.status(500).send({ message: 'Erro ao excluir cerveja' })
    }
}

const getCervejasPeloId = async (req, res) => {
    try {
        const id  = req.params.id

        if (!id) {
            return res.status(400).send({ message: 'Id nao informado' })
        }

        const cerveja = await Cerveja.findOne({ where: { id } })

        if(cerveja){
            res.status(200).send({ message: 'Cerveja encontrada', cerveja })
        } else {
            res.status(204).send({message:'Cerveja nao encontrada'})
        }
        
    } catch (err) {
        res.status(500).send({ message: 'Erro ao buscar cerveja' })
    }
}

export {
  getCervejas,
  getCervejasPeloId,
  criarCerveja,
  atualizarCerveja,
  apagarCerveja,
};
