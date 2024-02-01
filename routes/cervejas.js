import express from 'express'
import { getCervejas, getCervejasPeloId, criarCerveja, atualizarCerveja, apagarCerveja } from '../controllers/cervejas.js'

const router = express.Router()

router.get('/cervejas', getCervejas) 

router.get('/cervejas/:id',getCervejasPeloId)

router.post('/cervejas', criarCerveja) 

router.put('/cervejas/:id', atualizarCerveja)

router.delete('/cervejas/:id', apagarCerveja)

export { router } 