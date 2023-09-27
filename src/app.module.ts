import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'hotelladouceu_db',
    logger: 'advanced-console',
    logging: ['error'],
    synchronize: true,
    autoLoadEntities: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  }), MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
