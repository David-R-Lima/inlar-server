import { Injectable } from '@nestjs/common';
import { DoadorRepositorio } from 'src/inlar/database/repositories/doador-repositorio';
import { Doador } from 'src/inlar/entities/doador';

interface Request {
  nome: string;
  tipoPessoa: string;
  cpf?: string;
  cnpj?: string | null;
  contato1?: string | null;
  contato2?: string | null;
  cep?: string | null;
  logradouro?: string | null;
  numero?: string | null;
  complemento?: string | null;
  bairro?: string | null;
  cidade?: string | null;
  uf?: string | null;
  observacoes?: string | null;
}

@Injectable()
export class CreateDoador {
  constructor(private doadorRepositorio: DoadorRepositorio) {}

  async execute(data: Request): Promise<Doador | null> {
    const doador = new Doador({
      nome: data.nome,
      tipoPessoa: data.tipoPessoa,
      cpf: data.cpf,
      cnpj: data.cnpj,
      contato1: data.contato1,
      contato2: data.contato2,
      cep: data.cep,
      logradouro: data.logradouro,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      observacoes: data.observacoes,
      dataCadastro: new Date(),
      ativo: true,
    });

    try {
      const res = await this.doadorRepositorio.create(doador);

      return res;
    } catch (error) {
      console.log('error: ', error);
      return null;
    }
  }
}