import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["src/migarations/*.ts"],
    subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
