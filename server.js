const http = require('http')
const app =  require('./app')

const PORT = 5001 || process.env.PORT
// const PORT = process.env.PORT || 5001

const server = http.createServer(app)
server.listen(PORT)