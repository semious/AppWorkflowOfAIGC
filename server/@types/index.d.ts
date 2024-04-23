// import { MySQLConnection, MySQLPool, MySQLPromiseConnection, MySQLPromisePool } from '@fastify/mysql'

import {
  Pool,
  RowDataPacket,
} from "mysql2/promise";
// if you only pass connectionString
// declare module 'fastify' {
//   interface FastifyInstance {
//     mysql: {
//       dev: MySQLPool,
//       prod: MySQLConnection
//     }
//   }
// }

// if you passed type = 'connection'
// declare module 'fastify' {
//   interface FastifyInstance {
//     mysql: {
//       dev: MySQLConnection,
//       prod: MySQLConnection
//     }
//   }
// }

// if you passed promise = true
declare module 'fastify' {
  interface FastifyInstance {
    mysql: {
      dev: Pool,
      prod: Pool,
      [key: string]: Pool,
    }
  }
}

// if you passed promise = true, type = 'connection'
// declare module 'fastify' {
//   interface FastifyInstance {
//     mysql: {
//       dev: MySQLPromiseConnection,
//       prod: MySQLPromiseConnection
//     }
//   }
// }

type ResponseResult = {
  code: number,
  message?: string,
  data: any
}
