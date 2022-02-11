import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class BalanceCheckComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
  number='';
  amount:any='';

  verify(){
    if(this.number == localStorage.getItem("Phone")){
      this.amount = localStorage.getItem('Available Balance')
    }
  }
}
