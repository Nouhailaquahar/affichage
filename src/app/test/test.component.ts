import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(private http: HttpClient) {}

  callBackend() {
    this.http.get('http://localhost:8080/api/groovy').subscribe((response: any) => {
      alert(response.message);
    });
  }
}
