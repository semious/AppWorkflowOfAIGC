import { FastifyInstance } from "fastify";
import fp from 'fastify-plugin'

export default fp(async function (server: FastifyInstance) {
  server.register(require("@fastify/cors"), {
    hook: "onRequest",
    delegator: (req: any, callback: any) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true,
      };

      // do not include CORS headers for requests from localhost
      // if (/^localhost$/m.test(req.headers.origin)) {
      //   corsOptions.origin = false
      // }

      // callback expects two parameters: error and options
      callback(null, corsOptions);
    },
  });
});
