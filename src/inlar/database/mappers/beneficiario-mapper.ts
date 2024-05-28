import { Beneficiario } from 'src/inlar/entities/beneficiario';
import { Prisma, beneficiario as PrismaBeneficiario } from '@prisma/client';

export class BeneficiarioMapper {
  static toDatabase(
    beneficiario: Beneficiario,
  ): Prisma.beneficiarioUncheckedCreateInput {
    return {
      NOME: beneficiario.getNome(),
      DATANASC: beneficiario.getDataNascimento(),
      TIPOPESSOA: beneficiario.getTipoPessoa(),
      GENERO: beneficiario.getGenero(),
      RG: beneficiario.getRg(),
      CPF: beneficiario.getCpf(),
      CNPJ: beneficiario.getCnpj(),
      CONTATO1: beneficiario.getContato1(),
      CONTATO2: beneficiario.getContato2(),
      CEP: beneficiario.getCep(),
      LOGRADOUDO: beneficiario.getLogradouro(),
      NUMERO: beneficiario.getNumero(),
      COMPLEMENTO: beneficiario.getComplemento(),
      BAIRRO: beneficiario.getBairro(),
      CIDADE: beneficiario.getCidade(),
      SIGLAESTADO: beneficiario.getUf(),
      OBSERVACOES: beneficiario.getObservacoes(),
      DATACAD: beneficiario.getDataCadastro(),
      ATIVO: beneficiario.getAtivo(),
    };
  }

  static fromDatabase(raw: PrismaBeneficiario): Beneficiario {
    const beneficiario = new Beneficiario(
      raw.IDBENEFICIARIO,
      raw.NOME,
      raw.DATANASC,
      raw.TIPOPESSOA,
      raw.GENERO,
      raw.RG,
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

    return beneficiario;
  }
}
