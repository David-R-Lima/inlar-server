import { Injectable } from '@nestjs/common';
import { UsuarioRepositorio } from 'src/inlar/database/repositories/usuario-repositorio';
import { Usuario } from 'src/inlar/entities/usuario';

interface Request {
  usuario: string;
  email: string;
  senha: string;
}

@Injectable()
export class CreateUsuario {
  constructor(private usuarioRepositorio: UsuarioRepositorio) {}

  async execute(data: Request): Promise<Usuario | null> {
    const usuario = new Usuario(
      data.usuario,
      data.senha,
      data.email,
      'U',
      new Date(),
      true,
    );

    try {
      const res = this.usuarioRepositorio.create(usuario);

      return res;
    } catch (error) {
      return null;
    }
  }
}