import { Router } from 'express'

import { ComentarController } from '../controllers/comentars.js'

export const comentarsRouter = Router()

comentarsRouter.get('/', ComentarController.getAll)
comentarsRouter.post('/', ComentarController.create)

comentarsRouter.get('/:id', ComentarController.getById)
comentarsRouter.delete('/:id', ComentarController.delete)
comentarsRouter.patch('/:id', ComentarController.update)

