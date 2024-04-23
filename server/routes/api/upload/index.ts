import { FastifyInstance } from "fastify";
import fileUpload from 'fastify-file-upload';
import { upload } from "../../../lib/upload";

export default async function (fastify: FastifyInstance) {
  fastify.register(fileUpload)
  fastify.post("/", async function (req, reply) {
    // @ts-ignore
    const files = req.raw.files;
    // console.log(files)
    let fileArr = []
    for (let key in files) {
      const url = await upload(files[key].data, files[key].mimetype)
      fileArr.push({
        name: files[key].name,
        mimetype: files[key].mimetype,
        url,
      })
    }
    reply.send(fileArr)
  });
}
