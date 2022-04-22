import { Component } from '@angular/core';

//JS de Süslü parantez"{}" obje demektir
@Component({
  selector: 'app-root', //app-root html dosyasında onu tanımamızı sağlıyor
  templateUrl: './app.component.html', //"./" aynı klasör demek
  styleUrls: ['./app.component.css'], //Üstteki html in css lerini koyduğumuz yer
}) //"[]" JS de array demek
export class AppComponent {
  // Component HTML in datasını yönettiğimiz yer
  title: string = 'northwind'; //any = her veri türü olabilir
  user: string = 'Emir Odabaş';

}
