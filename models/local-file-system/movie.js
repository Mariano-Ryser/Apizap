import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils.js'

const movies = readJSON('./movies.json')

export class ComentarModel {

        static getAll ({ genre }) {

                if(genre) {
                    return movies.filter(
                    movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
                    )}

                console.log(movies)

        return movies
        }

        static async getById ({id}) {
            const movie = movies.find(movie => movie.id === id)
            if( movie )
            return movie
        }

        static async create ({input}){
            //En base de datos! 
            const newComentar={
                id: randomUUID(), //crea un uuid v4
            //Data ya validada
                ...input
            }
            //Esto no seria REST, porque estamos guardando
            //el estado de la aplicacion en memoria
            movies.push(newComentar)

            return newComentar
        }

        static async delete ({ id }){
            const movieIndex = movies.findIndex(movie => movie.id === id)
            if(movieIndex === -1) return false

            movies.splice(movieIndex, 1)
            return true
        }

        static async update({id, input}){
            const movieIndex = movies.findIndex(movie => movie.id === id)
            if(movieIndex === -1) return false

            movies[movieIndex] = {
                ...movies[movieIndex],
                ...input
            }
            return movies[movieIndex]
        }

}
