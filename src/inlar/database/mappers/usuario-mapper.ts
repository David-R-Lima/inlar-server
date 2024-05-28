import { Usuario } from 'src/inlar/entities/usuario';
import { Prisma, usuario as PrismaUsuario } from '@prisma/client';

export class UsuarioMapper {
  static toDatabase(usuario: Usuario): Prisma.usuarioUncheckedCreateInput {
    return {
      USUARIO: usuario.getUsuario(),
      SENHA: usuario.getSenha(),
      EMAIL: usuario.getEmail(),
      ROLE: usuario.getRole(),
      DATACAD: usuario.getDataCadastro(),
      ATIVO: usuario.getAtivo(),
    };
  }
  static fromDatabase(raw: PrismaUsuario): Usuario {
    const usuario = new Usuario(
      raw.IDUSUARIO,
      raw.USUARIO,
      raw.SENHA,
      raw.EMAIL,
      raw.ROLE,
      raw.DATACAD,
      raw.ATIVO,
    );

    return usuario;
  }
}
