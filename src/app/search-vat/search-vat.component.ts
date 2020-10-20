import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-vat',
  templateUrl: './search-vat.component.html',
  styleUrls: ['./search-vat.component.css']
})
export class SearchVATComponent implements OnInit {

  ngOnInit(): void {
  }

  id = ''
  url = 'https://vat.erply.com/numbers?vatNumber=';
  items = [];
  errorMessage = 'Please enter 11 characters';
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
    this.items = [];
    this.http.get(this.url).toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(key, data[key]);
    }).catch(err => console.log(err));
  }

}
