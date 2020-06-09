import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VAT-check';
  url = `https://vat.erply.com/numbers?vatNumber=BG999999999`;
  items = [];
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(key, data[key]);
    });
  }
}
