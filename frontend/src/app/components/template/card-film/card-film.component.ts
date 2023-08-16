import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/views/list-films/film.model';
import { CheckoutService } from './../../../views/checkout/checkout.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private service: CheckoutService){}

  ngOnInit(): void {
    this.service.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

}
