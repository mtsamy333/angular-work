import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = ""
  phone = ""
  account = ""
  upi = ""
  iBalance = ""
  aBalance = ""
  create() {
    localStorage.setItem("Name", this.name);
    localStorage.setItem("Phone", this.phone);
    localStorage.setItem("Account Number", this.account);
    localStorage.setItem("upi", this.upi);
    localStorage.setItem("Initial Balance", this.iBalance);
    localStorage.setItem("Available Balance", this.aBalance);
  }
}
