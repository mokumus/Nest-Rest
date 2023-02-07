import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { GatewayModule } from './gateway/gateway.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(config.mongoURI),
    GatewayModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: '12345678',
      database: 'google_oauth2_app',
      entities: [User],
      synchronize: true,
    }),
    PassportModule.register({ session: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
