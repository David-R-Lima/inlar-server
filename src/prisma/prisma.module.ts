import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsuarioRepositorio } from 'src/inlar/database/repositories/usuario-repositorio';
import { DoadorRepositorio } from 'src/inlar/database/repositories/doador-repositorio';

@Module({
  providers: [PrismaService, UsuarioRepositorio, DoadorRepositorio],
  exports: [UsuarioRepositorio, DoadorRepositorio],
})
export class PrismaModule {}
