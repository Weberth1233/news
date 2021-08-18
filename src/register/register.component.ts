import { Component, Input } from "@angular/core";
import { News } from "../app/news.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  @Input() noticias: any = [];

  Titulo: string = " ";
  DataPublic: string = " ";
  Desc: string = " ";
  Criador: string = " ";

  dados: any;

  salvar() {
    this.dados = new News(
      this.Titulo,
      this.DataPublic,
      this.Desc,
      this.Criador
    );
    this.noticias.push(this.dados);
  }
}
