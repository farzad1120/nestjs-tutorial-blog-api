import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConnectionService } from './db-connection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConnectionService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DbConnectionService],
})
export class AppModule {}
