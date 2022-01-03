import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-54-167-8.compute-1.amazonaws.com',
      port: 5432,
      username: 'acayicpdlycbmt',
      password:
        '1b2c533d4fb2a3a383e0f0e5c706069baf0b586ecdf4a333fd3f94764110bdf1',
      database: 'd71aputvl38pff',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/* @Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'postgres',
      database: 'my_db',
      */
//entities: ['dist/**/*.entity{.ts,.js}'],
/*
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 */
