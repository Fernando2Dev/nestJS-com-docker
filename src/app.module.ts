import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm'
import { database } from './config/database.js';

@Module({
  imports: [
    TypeOrmModule.forRoot(database)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
