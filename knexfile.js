// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // our DBMS driver
    connection: {
      filename: './data/projects.db3', // the location of our db
    },
    useNullAsDefault: true, // necessary when using sqlite3 to prevent bugs and issues
    migrations: {
      directory: './data/migrations' // not required
    }
  },

  staging: {
  },

  production: {
  }

};
