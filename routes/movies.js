import { Router } from 'express'

import { MovieController } from '../controllers/movies.js'

export const comentarsRouter = Router()

comentarsRouter.get('/', MovieController.getAll)
comentarsRouter.post('/', MovieController.create)

comentarsRouter.get('/:id', MovieController.getById)
comentarsRouter.delete('/:id', MovieController.delete)
comentarsRouter.patch('/:id', MovieController.update)

