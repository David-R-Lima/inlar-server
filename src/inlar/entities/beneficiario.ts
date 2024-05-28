export class Beneficiario {
  constructor(
    private idBeneficiario: number,
    private nome: string,
    private dataNascimento: Date | null,
    private tipoPessoa: string,
    private genero: string,
    private cpf: string,
    private rg: string,
    private cnpj: string | null,
    private contato1: string | null,
    private contato2: string | null,
    private cep: string | null,
    private logradouro: string | null,
    private numero: string | null,
    private complemento: string | null,
    private bairro: string | null,
    private cidade: string | null,
    private uf: string | null,
    private observacoes: string | null,
    private dataCadastro: Date,
    private ativo: boolean,
  ) {}

  getIdBeneficiario(): number {
    return this.idBeneficiario;
  }
  getNome(): string {
    return this.nome;
  }
  setNome(nome: string) {
    this.nome = nome;
  }
  getDataNascimento(): Date {
    return this.dataNascimento;
  }
  setDataNascimento(dataNascimento: Date | null) {
    this.dataNascimento = dataNascimento;
  }

  getTipoPessoa(): string {
    return this.tipoPessoa;
  }

  setTipoPessoa(tipoPessoa: string) {
    this.tipoPessoa = tipoPessoa;
  }

  getGenero(): string {
    return this.genero;
  }
  setGenero(genero: string) {
    this.genero = genero;
  }

  getRg(): string {
    return this.rg;
  }
  setRg(rg: string) {
    this.rg = rg;
  }

  getCpf(): string {
    return this.cpf;
  }
  setCpf(cpf: string | null) {
    this.cpf = cpf;
  }
  getCnpj(): string {
    return this.cnpj;
  }
  setCnpj(cnpj: string | null) {
    this.cnpj = cnpj;
  }
  getContato1(): string {
    return this.contato1;
  }
  setContato1(contato1: string | null) {
    this.contato1 = contato1;
  }
  getContato2(): string {
    return this.contato2;
  }
  setContato2(contato2: string | null) {
    this.contato2 = contato2;
  }
  getCep(): string {
    return this.cep;
  }
  setCep(cep: string | null) {
    this.cep = cep;
  }
  getLogradouro(): string {
    return this.logradouro;
  }
  setLogradouro(logradouro: string | null) {
    this.logradouro = logradouro;
  }
  getNumero(): string {
    return this.numero;
  }
  setNumero(numero: string | null) {
    this.numero = numero;
  }
  getComplemento(): string {
    return this.complemento;
  }
  setComplemento(complemento: string | null) {
    this.complemento = complemento;
  }
  getBairro(): string {
    return this.bairro;
  }
  setBairro(bairro: string | null) {
    this.bairro = bairro;
  }
  getCidade(): string {
    return this.cidade;
  }
  setCidade(cidade: string | null) {
    this.cidade = cidade;
  }
  getUf(): string {
    return this.uf;
  }
  setUf(uf?: string) {
    this.uf = uf;
  }
  getObservacoes(): string {
    return this.observacoes;
  }
  setObservacoes(observacoes: string | null) {
    this.observacoes = observacoes;
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
