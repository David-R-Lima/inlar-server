import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsuarioRepositorio } from 'src/inlar/database/repositories/usuario-repositorio';

@Module({
  providers: [PrismaService, UsuarioRepositorio],
  exports: [UsuarioRepositorio],
})
export class PrismaModule {}
