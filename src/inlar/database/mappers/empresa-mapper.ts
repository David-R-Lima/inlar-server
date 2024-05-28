import { Empresa } from 'src/inlar/entities/empresa';
import { Prisma, empresa as PrismaEmpresa } from '@prisma/client';

export class EmpresaMapper {
  static toDatabase(empresa: Empresa): Prisma.empresaUncheckedCreateInput {
    return {
      NOMEFANTASIA: empresa.getNomeFantasia(),
      RAZAOSOCIAL: empresa.getRazaoSocial(),
      CNPJ: empresa.getCnpj(),
      CONTATO1: empresa.getContato1(),
      CONTATO2: empresa.getContato2(),
      CEP: empresa.getCep(),
      LOGRADOURO: empresa.getLogradouro(),
      NUMERO: empresa.getNumero(),
      COMPLEMENTO: empresa.getComplemento(),
      BAIRRO: empresa.getBairro(),
      CIDADE: empresa.getCidade(),
      SIGLAESTADO: empresa.getUf(),
    };
  }

  static fromDatabase(raw: PrismaEmpresa): Empresa {
    const empresa = new Empresa(
      raw.IDEMPRESA,
      raw.NOMEFANTASIA,
      raw.RAZAOSOCIAL,
      raw.CNPJ,
      raw.CONTATO1,
      raw.CONTATO2,
      raw.CEP,
      raw.LOGRADOURO,
      raw.NUMERO,
      raw.COMPLEMENTO,
      raw.BAIRRO,
      raw.CIDADE,
      raw.SIGLAESTADO,
    );

    return empresa;
  }
}
