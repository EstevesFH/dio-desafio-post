import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/DB/database.sqlite',
    synchronize: false,
    logging: true,
    "entities": [
        "./src/entities/**/*.ts"
    ],
    "migrations": [
         "./src/DB/migrations/**/*.ts"
    ],
  });
  
  export default AppDataSource;