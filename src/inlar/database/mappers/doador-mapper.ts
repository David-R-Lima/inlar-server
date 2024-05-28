import { Doador } from 'src/inlar/entities/doador';
import { Prisma, doador as PrismaDoador } from '@prisma/client';

export class DoadorMapper {
  static toDatabase(doador: Doador): Prisma.doadorUncheckedCreateInput {
    return {
      NOME: doador.getNome(),
      TIPOPESSOA: doador.getTipoPessoa(),
      CPF: doador.getCpf(),
      CNPJ: doador.getCnpj(),
      CONTATO1: doador.getContato1(),
      CONTATO2: doador.getContato2(),
      CEP: doador.getCep(),
      LOGRADOUDO: doador.getLogradouro(),
      NUMERO: doador.getNumero(),
      COMPLEMENTO: doador.getComplemento(),
      BAIRRO: doador.getBairro(),
      CIDADE: doador.getCidade(),
      SIGLAESTADO: doador.getUf(),
      OBSERVACOES: doador.getObservacoes(),
      DATACAD: doador.getDataCadastro(),
      ATIVO: doador.getAtivo(),
    };
  }
  static fromDatabase(raw: PrismaDoador): Doador {
    const doador = new Doador(
      raw.IDDOADOR,
      raw.NOME,
      raw.TIPOPESSOA,
      raw.CPF,
      raw.CNPJ,
      raw.CONTATO1,
      raw.CONTATO2,
      raw.CEP,
      raw.LOGRADOUDO,
      raw.NUMERO,
      raw.COMPLEMENTO,
      raw.BAIRRO,
      raw.CIDADE,
      raw.SIGLAESTADO,
      raw.OBSERVACOES,
      raw.DATACAD,
      raw.ATIVO,
    );

    return doador;
  }
}
