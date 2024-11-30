import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const documentConfig = new DocumentBuilder()
    .setTitle('SMART PUMP')
    .setDescription('The SMART PUMP api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('/swagger', app, documentFactory);

  const configService: ConfigService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('server.port'));
}
bootstrap();
