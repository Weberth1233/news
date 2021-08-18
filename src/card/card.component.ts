import { Component, Input } from "@angular/core";
import { News } from "../app/news.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  public paginaAtual = 1;

  //Meu filho tem um input que receb vazio
  @Input() noticias: any = [];
}
