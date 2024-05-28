export class TipoDoacao {
  constructor(
    private idTipoDoacao: number,
    private descricao: string,
    private dataCadastro: Date,
    private ativo: boolean,
  ) {}

  getidTipoDoacao(): number {
    return this.idTipoDoacao;
  }

  getdescricao(): string {
    return this.descricao;
  }

  setdescricao(descricao: string) {
    this.descricao = descricao;
  }

  getDataCadastro(): Date {
    return this.dataCadastro;
  }
  setDataCadastro(dataCadastro: Date) {
    this.dataCadastro = dataCadastro;
  }
  getAtivo(): boolean {
    return this.ativo;
  }
  setAtivo(ativo: boolean) {
    this.ativo = ativo;
  }
}
