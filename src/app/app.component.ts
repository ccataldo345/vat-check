import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VAT-check';
  id = ''
  url = 'https://vat.erply.com/numbers?vatNumber=';
  items = [];
  errorMessage = 'Invalid ID';
  invalidId = false;

  constructor(private http: HttpClient) { }

  verifyID() {
    if (this.id.length !== 11) {
      this.invalidId = true;
    } else {
      this.invalidId = false;
      this.url = 'https://vat.erply.com/numbers?vatNumber=' + this.id;
      this.searchVAT();
    }
  }

  searchVAT() {
    this.http.get(this.url).toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(key, data[key]);
    });
  }
}
