require('dotenv/config')
const server = require('json-server')

const app = server.create()
const middleware = server.defaults()

app.use(middleware)
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
