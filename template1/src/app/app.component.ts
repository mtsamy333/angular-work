import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template1';

  name = "";
  phone = "";
  mail = "";
  message = "";
  send(name: any, phone: any, mail: any, message: any) {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("mail", mail);
    localStorage.setItem("message", message);
  }
}
