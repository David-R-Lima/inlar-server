import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/inlar/entities/usuario';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioMapper } from '../mappers/usuario-mapper';

@Injectable()
export class UsuarioRepositorio {
  constructor(private prisma: PrismaService) {}

  async create(usuario: Usuario): Promise<Usuario> {
    const data = UsuarioMapper.toDatabase(usuario);

    const prismaUsuario = await this.prisma.usuario.create({
      data,
    });

    return UsuarioMapper.fromDatabase(prismaUsuario);
  }

  async findByEmail(idUsuario: number, email: string): Promise<Usuario> {
    const prismaUsuario = await this.prisma.usuario.findUnique({
      where: {
        IDUSUARIO: idUsuario,
        EMAIL: email,
      },
    });

    return UsuarioMapper.fromDatabase(prismaUsuario);
  }

  async update(idUsuario: number, usuario: Usuario): Promise<Usuario> {
    const data = UsuarioMapper.toDatabase(usuario);

    const prismaUsuario = await this.prisma.usuario.update({
      where: {
        IDUSUARIO: idUsuario,
      },
      data,
    });

    return UsuarioMapper.fromDatabase(prismaUsuario);
  }
}
