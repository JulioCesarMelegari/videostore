import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public baseUrl: string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  public listSelectedFilms: Film[] = [];

  private _priceHandler: number = 0;
  private _filmHandler!: Film ;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(msg, "close", {
      duration: 10000,
      horizontalPosition: "center",
      verticalPosition:"bottom",
      panelClass: isError ? ['success'] : ['error'],
    })
  }

  getPrice(): number{
    return this._priceHandler;
  }

  setPrice(value: number){
    this._priceHandler=value;
  }

  getListFilms(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(this.baseUrl + '/films');
  }

  getFilm():Film{
    return this._filmHandler;
  }

  setFilm(value: Film){
    this._filmHandler = value;
  }

  selectFilm(){
    setTimeout(() =>{
      this.totalPrice += this.getPrice();
      this.listSelectedFilms.push(this.getFilm());
    }, 1);
    console.log(this.listSelectedFilms);
  }

  unselectFilm(){
    this.totalPrice -= this.getPrice();
    if(this.totalPrice < 0){
      this.totalPrice = 0;
    }
    let index = this.listSelectedFilms.indexOf(this.getFilm());
    if(index > -1 || index === this.listSelectedFilms.indexOf(this.getFilm())){
      this.listSelectedFilms.splice(index, 1)
    }
    console.log(this.listSelectedFilms);
  }
}
