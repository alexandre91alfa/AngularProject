import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"]
})
export class EventosComponent implements OnInit {
  eventos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos(): any {
    this.http.get("http://127.0.0.1:5000/api/values").subscribe(
      respose => {
        this.eventos = respose;
      },
      erro => console.log(erro)
    );
  }
}
