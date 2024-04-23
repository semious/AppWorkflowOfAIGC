import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.get("/healthcheck", async function (req, reply) {
    // console.log(server);
    return { status: 'ok' };
  });
}
