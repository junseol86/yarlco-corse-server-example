import { NestFactory } from '@nestjs/core';
import { ClassModule } from './modules/class/class.module';

async function bootstrap() {
  const app = await NestFactory.create(ClassModule);
  app.enableCors({
    // origin: '*',
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE'
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
