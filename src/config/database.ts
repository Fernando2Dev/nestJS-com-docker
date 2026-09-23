import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const database: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'admin',
    password: 'root',
    database: 'api-com-docker-db',
    entities: [],
    synchronize: true
}