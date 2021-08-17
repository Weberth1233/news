import { Component } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent {
  noticias: any = [
    {
      Titulo: "Guerra no Pacífico",
      DataPublic: "26/09/2000",
      Categoria: "Mundo",
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país.",
      Criador: "Weberth Erik"
    },
    {
      Titulo: "Inglaterra perde em casa",
      DataPublic: "26/09/2000",
      Categoria: "Esporte",
      Desc:
        "O jogo aconteceu nesse domingo e o campeão foi decidido nos penaltins levando a taça a grande Italia",
      Criador: "Erik Junior"
    },
    {
      Titulo: "Disputa pelo 5G",
      DataPublic: "26/09/2000",
      Categoria: "Tecnologia",
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país",
      Criador: "Bruno Aguiar"
    },
    {
      Titulo: "Novo filme do Esquadrão Galático",
      DataPublic: "26/09/2000",
      Categoria: "Entreterimento",
      Desc: "Novo filme do Esquadrão Galático está nos cimenas já!",
      Criador: "Carlos Dias"
    },
    {
      Titulo: "Dolar em alta",
      DataPublic: "22/04/2020",
      Categoria: "Brasil",
      Desc: "O valor da moeda americana está valendo 5,50",
      Criador: "Teste"
    },
    {
      Titulo: "Flamendo golea novamente",
      DataPublic: "13/08/2021",
      Categoria: "Esporte",
      Desc:
        "Flamendo vence Olimpia por 4 a 1 em pleno estádio dos adversários.",
      Criador: "Weberth Erik"
    }
  ];
  Filtrar(categoria: string) {
    this.noticias.forEach((element) => {
      if (element.Categoria === categoria) {
        console.log(element.Titulo);
      }
    });
  }
}
