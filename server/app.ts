import Fastify from 'fastify'
import type { FastifyCookieOptions } from '@fastify/cookie'
import path from 'path'
import autoLoad from '@fastify/autoload'
import 'dotenv/config'

// import fastifyStatic from '@fastify/static';
const server = Fastify({
  logger: true,
  bodyLimit: 30 * 1024 * 1024,
})

server.register(require('@fastify/cookie'), {
  // secret: "my-secret-dlebleNTxld", // for cookies signature
  hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
  parseOptions: {}  // options for parsing cookies
} as FastifyCookieOptions)

// server.addHook('preHandler', async (request, reply) => {
  // const token = request.cookies.token;
  // console.log('cookie token:>> ', token);
  // console.log('session name :>> ', name);
  // request.headers.name = name;
  // // console.log('preHandler ip:>> ', request.ip);
  // // if (['127.0.0.1'].includes(request.ip)) {
  // //   return;
  // // }
  // if (!request.url.includes('/api')) {
  //   return;
  // }
// })

server.register(autoLoad, {
  dir: path.join(__dirname, 'plugins')
})

server.register(autoLoad, {
  dir: path.join(__dirname, 'routes')
})

const start = async () => {
  server.listen({
    port: 6001,
    host: '0.0.0.0'
  }, function (err, address) {
    if (err) {
      server.log.error(err)
      console.log('error :>> ', err);
      process.exit(1)
    }
    // console.log('environment: ', process.env)
    // server.log.info(`server listening on ${address}`)
  })
}
start()
