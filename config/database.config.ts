const databaseConfig = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "785412",
  "database": "igestao_dev",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

export { databaseConfig }
