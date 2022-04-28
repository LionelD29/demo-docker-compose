import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public now: string = 'click the button to update';

  constructor(private http: HttpClient) {}

  onClick(): void {
    // gets the current dateTime from the back-end
    this.http.get('http://localhost:8081/now', {responseType: 'text'})
    .subscribe({
      next: now => this.now = now
    });
  }
}
