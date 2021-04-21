const keyring = require('@polkadot/keyring')
const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
app.use(requestLogger)
app.use(cors())
app.get('/api/:address/:type',(req,res)=> {
    const address = req.params.address
    const type = +req.params.type
        Address = keyring.encodeAddress(address,type)
        res.json(Address)
}
)
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'error address' })
  }
  app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })