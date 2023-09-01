import { ComentarModel } from '../models/local/comentar.js'
import { validateComentar, validatePartialComentar } from '../schemas/comentars.js' //importo funcion de validacion

export class ComentarController {
    static async getAll (req, res) {
      const { genre } = req.query
      const comentars = await ComentarModel.getAll({ genre })
      res.json(comentars)
    }
  
    static async getById (req, res) {
      const { id } = req.params
      const comentar = await ComentarModel.getById({ id })
      if (comentar) return res.json(comentar)
      res.status(404).json({ message: 'Comentar not found' })
    }
  
    static async create (req, res) {
      const result = validateComentar(req.body)
  
      if (!result.success) {
      // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
  
      const newComentar = await ComentarModel.create({ input: result.data })
  
      res.status(201).json(newComentar)
    }
  
    static async delete (req, res) {
      const { id } = req.params
  
      const result = await ComentarModel.delete({ id })
  
      if (result === false) {
        return res.status(404).json({ message: 'Comentar not found' })
      }
  
      return res.json({ message: 'Comentar deleted' })
    }
  
    static async update (req, res) {
      const result = validatePartialComentar(req.body)
  
      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
  
      const { id } = req.params
  
      const updatedComentar = await ComentarModel.update({ id, input: result.data })
  
      return res.json(updatedComentar)
    }
  }