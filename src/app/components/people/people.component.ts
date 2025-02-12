import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {


  constructor(private _MoviesService:MoviesService){ }
  movies!:any[]
  posterPath:string = 'https://image.tmdb.org/t/p/w500'
  serchTerm!:string
  ngOnInit(): void {
    this._MoviesService.searchTerm.subscribe({
      next: x => {
        this.serchTerm  = x
      }

    })
    this.serchTerm = ''
  this._MoviesService.getMovies('person', 'week').subscribe({
      next:res =>{
        setTimeout(() => {

        console.log(res);
        this.movies = res.results

        }, 1000);
      },
      error: err=>{
        console.log(err);
      }
    })

  }
}
