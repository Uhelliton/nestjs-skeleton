const databaseConfig = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "",
  "database": "",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

export { databaseConfig }
