import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from, map ,tap, take} from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  ngOnInit(){
    // of(2,4,6,8).subscribe(item => console.log(item));

    from([20,37,34,33]).pipe(
      tap(item => console.log(`tap item: ${item}`)),
      map(item => item * 3),
      map(item => item - 15),
      map(item => {
            if(item%2==0){
              throw new Error('numero pari trovato!')
            }
            return item
      }),
      take(3)
    ).
    subscribe({
      next: (item => console.log(`subscribe item: ${item}`)),
      error: (err => console.log(`${err}`)),
      complete: () => console.log('complete')
    })
  }

}

bootstrapApplication(App);
