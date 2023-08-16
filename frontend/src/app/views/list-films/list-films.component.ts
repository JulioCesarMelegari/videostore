import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';
import { CheckoutService } from '../checkout/checkout.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  listFilms: Film[] = [];

  constructor(private service: CheckoutService){}

  ngOnInit(): void {
    this.service.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }
}
