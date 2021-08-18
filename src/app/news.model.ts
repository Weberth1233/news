export class News{
  titulo:string;
  dataPublic:string;
  desc:string;
  criador:string;

  constructor(titulo:string, dataPublic:string,desc:string, criador:string) {
    this.titulo=titulo;
    this.dataPublic=dataPublic;
    this.desc=desc;
    this.criador=criador;
  }

}