import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';
import { CheckoutService } from '../checkout/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden = false;

  constructor(private service: CheckoutService, private route: Router){}

  ngOnInit(): void {
    this.service.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }

  toggleCount(){
    return this.listSelectedFilms = this.service.listSelectedFilms.length;
  }

  toCheckout(): void{
    this.route.navigate(['../checkout']);
  }
}
