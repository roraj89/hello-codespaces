import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.StatusCode = 200
  res.setHeader('ContentType', 'text/plain')
  res.end('Hello HTTP World!')
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log('Server listening on https://${host}:${port}')
})
