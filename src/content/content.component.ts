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
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país.",
      Criador: "Weberth Erik"
    },
    {
      Titulo: "Inglaterra perde em casa",
      DataPublic: "26/09/2000",
      Desc:
        "O jogo aconteceu nesse domingo e o campeão foi decidido nos penaltins levando a taça a grande Italia",
      Criador: "Erik Junior"
    },
    {
      Titulo: "Disputa pelo 5G",
      DataPublic: "26/09/2000",
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país",
      Criador: "Bruno Aguiar"
    },
    {
      Titulo: "Nova notícia adicionada",
      DataPublic: "26/09/2000",
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país",
      Criador: "Carlos Dias"
    },
    {
      Titulo: "Noticia teste adc",
      DataPublic: "22/04/2020",
      Desc:
        "A guerra começou e já deixou mais de 10.000 mil feridos ao redor de todo o país",
      Criador: "Teste"
    },
    {
      Titulo: "Flamendo golea novamente",
      DataPublic: "13/08/2021",
      Desc:
        "Flamendo vence Olimpia por 4 a 1 em pleno estádio dos adversários.",
      Criador: "Weberth Erik"
    }
  ];
}
