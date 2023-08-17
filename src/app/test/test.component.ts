import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class  testComponent {
  constructor(private http: HttpClient) {}

  callBackend() {
    this.http.get('http://localhost:8080/api/groovy').subscribe((response: any) => {
      alert(response.message);
    });
  }
}
