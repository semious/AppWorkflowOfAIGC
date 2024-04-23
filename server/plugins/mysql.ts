// import { FastifyInstance } from 'fastify'
// import fp from 'fastify-plugin'
// // import mysql from 'mysql2/promise';
// import "dotenv/config";

// module.exports = fp(async function (fastify: FastifyInstance) {
//   fastify.register(require('@fastify/mysql'), {
//     name: 'biz_test',
//     promise: true,
//     // connectionString: 'mysql://root@117.50.176.19/mysql'
//     host: process.env.MYSQL_BIZ_SERVER_TEST,
//     user: process.env.MYSQL_BIZ_USER_TEST,
//     password: process.env.MYSQL_BIZ_PASS_TEST,
//     database: 'fortune_test',
//     supportBigNumbers: true,
//     bigNumberStrings: true,
//     connectTimeout: 3000,
//   });

//   fastify.register(require('@fastify/mysql'), {
//     name: 'biz_prod',
//     promise: true,
//     // connectionString: 'mysql://root@117.50.176.19/mysql'
//     host: process.env.MYSQL_BIZ_SERVER_PROD,
//     user: process.env.MYSQL_BIZ_USER_PROD,
//     password: process.env.MYSQL_BIZ_PASS_PROD,
//     database: process.env.MYSQL_BIZ_DB_PROD,
//     supportBigNumbers: true,
//     bigNumberStrings: true,
//     connectTimeout: 3000,
//   });

// });
