const env = {
  database: 'samm',
  username: 'samm',
  password: 'samm',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
