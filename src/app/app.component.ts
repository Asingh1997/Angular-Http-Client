import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private http: Http) { }
  httpdata;
  httpdata1;
  httpdata2;
arrBirds: string [];
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users").
pipe(map((response) => response.json())).subscribe((data) => 
{this.displaydata(data);})
   }
   displaydata(data) {this.httpdata = data;


this.http.get("https://api.myjson.com/bins/t7wec").
pipe(map((response) => response.json())).subscribe((data) => 
{this.mydata(data);})
   }
   mydata(data) {this.httpdata1 = data;


this.http.get("https://api.myjson.com/bins/11fojo").
pipe(map((response) => response.json())).subscribe((data) => 
{this.mydata2(data);})
   }
   mydata2(data) {this.httpdata2 = data;




}
}


