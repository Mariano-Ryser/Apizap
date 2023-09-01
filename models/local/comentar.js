import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const comentars = readJSON('./comentars.json')

export class ComentarModel {

        static getAll ({ genre }) {

                if(genre) {
                    return comentars.filter(
                    comentar => comentar.genre.some(g => g.toLowerCase() === genre.toLowerCase())
                    )}

                console.log(comentars)

        return comentars
        }

        static async getById ({id}) {
            const comentar = comentars.find(comentar => comentar.id === id)
            if( comentar )
            return comentar
        }

        static async create ({input}){
            //En base de datos! 
            const newcomentar={
                id: randomUUID(), //crea un uuid v4
            //Data ya validada
                ...input
            }
            //Esto no seria REST, porque estamos guardando
            //el estado de la aplicacion en memoria
            comentars.push(newcomentar)

            return newcomentar
        }

        static async delete ({ id }){
            const comentarIndex = comentars.findIndex(comentar => comentar.id === id)
            if(comentarIndex === -1) return false

            comentars.splice(comentarIndex, 1)
            return true
        }

        static async update({id, input}){
            const comentarIndex = comentars.findIndex(comentar => comentar.id === id)
            if(comentarIndex === -1) return false

            comentars[comentarIndex] = {
                ...comentars[comentarIndex],
                ...input
            }
            return comentars[comentarIndex]
        }

}