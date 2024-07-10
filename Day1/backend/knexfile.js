module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'postgres',
      user: 'postgres',
      password: 'postgres',
      database: 'todo_app'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
