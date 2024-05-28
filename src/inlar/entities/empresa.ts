export class Empresa {
  constructor(
    private idEmpresa: number,
    private nomeFantasia: string,
    private razaoSocial: string,
    private cnpj: string,
    private contato1: string | null,
    private contato2: string | null,
    private cep: string | null,
    private logradouro: string | null,
    private numero: string | null,
    private complemento: string | null,
    private bairro: string | null,
    private cidade: string | null,
    private uf: string | null,
  ) {}

  getIdEmpresa(): number {
    return this.idEmpresa;
  }

  getNomeFantasia(): string {
    return this.nomeFantasia;
  }

  setNomeFantasia(nomeFantasia: string) {
    this.nomeFantasia = nomeFantasia;
  }

  getRazaoSocial(): string {
    return this.razaoSocial;
  }
  setRazaoSocial(razaoSocial: string) {
    this.razaoSocial = razaoSocial;
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
}
