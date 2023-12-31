import express, { json } from "express"

import { comentarsRouter } from './routes/comentars.js'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/movies.js'

const app = express()

app.use(json())
app.use(corsMiddleware()) //siempre llamar la funcion !
app.disable('x-powered-by')// deshabilitar el header X-Powered-By: Express

// app.use('/', html)
app.use('/comentars', comentarsRouter)
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log('server listening on port 1234')
})

