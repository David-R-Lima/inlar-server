import { Module } from '@nestjs/common';
import { CreateUsuario } from 'src/inlar/actions/usuarios/create-usuario';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUsuarioController } from './controllers/usuarios/create-usuario-controller';

@Module({
  imports: [PrismaModule],
  providers: [CreateUsuario],
  controllers: [CreateUsuarioController],
})
export class HttpModule {}
