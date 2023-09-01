import express, { json } from "express"
import { moviesRouter } from './router/movies.js'
import { corsMiddleware } from './middlewares/movies.js'

const app = express()

app.use(json())
app.use(corsMiddleware)
app.disable('x-powered-by')// deshabilitar el header X-Powered-By: Express

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log('server listening on port 1234')
})

