require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "orderMan",
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  secret: {
    secret_pw: "abc",
    secret_jwt: "abc",
  },
};
