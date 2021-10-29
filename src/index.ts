import 'dotenv/config'

import server from './server'

async function run() {
  await server.listen(3000, () => {
    console.log('Server started at port 3000!')
  })
}

run()
