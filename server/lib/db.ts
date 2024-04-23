import { FastifyInstance } from "fastify";
import { RowDataPacket } from "mysql2/promise";
import { log } from "./log";

export async function dbQuery(fastify: FastifyInstance, dbName: string, query: string) {
  log('dbQuery', dbName, query);
  const connection = await fastify.mysql[dbName].getConnection();
  const [result] = await connection.query(query,) as RowDataPacket[];
  connection.release();
  return result;
}

export async function dbExecute(fastify: FastifyInstance, dbName: string, query: string) {
  log('dbExecute', dbName, query);
  const connection = await fastify.mysql[dbName].getConnection();
  await connection.execute(query,);
  connection.release();
}

export async function dbTransaction(fastify: FastifyInstance, dbName: string, queryList: string[]) {
  log('dbTransaction', dbName, queryList);
  const connection = await fastify.mysql[dbName].getConnection();
  await connection.beginTransaction();
  for (const q of queryList) {
    await connection.execute(q,);
  }
  try {
    await connection.commit();
  } catch (error) {
    await connection.rollback();
  }
  connection.release();
}
