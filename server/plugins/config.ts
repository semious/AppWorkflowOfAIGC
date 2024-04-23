import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      env: string,
    }
  }
}

export default fp(async function (server: FastifyInstance) {
  server.decorate('config', {
    env: process.env.NODE_ENV || 'dev',
  });
})
