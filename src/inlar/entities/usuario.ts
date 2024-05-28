export class Usuario {
  constructor(
    private usuario: string,
    private senha: string,
    private email: string,
    private role: string,
    private dataCadastro: Date,
    private ativo: boolean,
    private idUsuario?: number,
  ) {}

  getIdUsuario(): number {
    return this.idUsuario;
  }

  getUsuario(): string {
    return this.usuario;
  }
  setUsuario(usuario: string) {
    this.usuario = usuario;
  }

  getSenha(): string {
    return this.senha;
  }
  setSenha(senha: string) {
    this.senha = senha;
  }

  getEmail(): string {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
  }

  getRole(): string {
    return this.role;
  }
  setRole(role: string) {
    this.role = role;
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
