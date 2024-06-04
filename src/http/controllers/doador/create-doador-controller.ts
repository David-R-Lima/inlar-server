import {
  Controller,
  Post,
  Body,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';

import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation.pipe';
import { CreateDoador } from 'src/inlar/actions/doador/create-doador';

const squema = z.object({
  nome: z.string({
    required_error: 'Field: {nome} is required',
  }),
  tipo_pessoa: z.string({
    required_error: 'Field: {tipo_pessoa} is required',
  }),
  cpf: z.string().max(11, { message: 'Cannot exceed 11 caracters' }).optional(),
  cnpj: z.string().optional(),
  contato1: z.string().optional(),
  contato2: z.string().optional(),
  cep: z.string().optional(),
  logradouro: z.string().optional(),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  uf: z.string().optional(),
  observacoes: z.string().optional(),
});

type Schema = z.infer<typeof squema>;
const validationPipe = new ZodValidationPipe(squema);

@Controller('/doador')
export class CreateDoadorController {
  constructor(private createDoador: CreateDoador) {}

  @Post()
  @HttpCode(201)
  async handle(
    @Body(validationPipe)
    body: Schema,
  ) {
    const doador = await this.createDoador.execute({
      nome: body.nome,
      tipoPessoa: body.tipo_pessoa,
      cpf: body.cpf,
      cnpj: body.cnpj,
      contato1: body.contato1,
      contato2: body.contato2,
      cep: body.cep,
      logradouro: body.logradouro,
      numero: body.numero,
      complemento: body.complemento,
      bairro: body.bairro,
      cidade: body.cidade,
      uf: body.uf,
      observacoes: body.observacoes,
    });

    if (doador) {
      return doador;
    }

    return new BadRequestException();
  }
}
