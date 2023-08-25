import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './../../../views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit{
  disabled = false;

  constructor(private CheckoutService: CheckoutService){}

  ngOnInit(): void {

  }

  selectFilm(){
    this.disabled = true;
    this.CheckoutService.selectFilm();
  }

  unselectFilm(){
    this.disabled = false;
    this.CheckoutService.unselectFilm();
  }

}
