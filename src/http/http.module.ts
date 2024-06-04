import { Module } from '@nestjs/common';
import { CreateUsuario } from 'src/inlar/actions/usuarios/create-usuario';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUsuarioController } from './controllers/usuarios/create-usuario-controller';
import { CreateDoador } from 'src/inlar/actions/doador/create-doador';
import { GetDoadorById } from 'src/inlar/actions/doador/get-doador-by-id';
import { CreateDoadorController } from './controllers/doador/create-doador-controller';
import { GetDoadorByIdController } from './controllers/doador/get-doador-by-id-controller';
import { UpdateDoador } from 'src/inlar/actions/doador/update-doador';
import { UpdateDoadorController } from './controllers/doador/update-doador-controller';

@Module({
  imports: [PrismaModule],
  providers: [CreateUsuario, CreateDoador, GetDoadorById, UpdateDoador],
  controllers: [
    CreateUsuarioController,
    CreateDoadorController,
    GetDoadorByIdController,
    UpdateDoadorController,
  ],
})
export class HttpModule {}
