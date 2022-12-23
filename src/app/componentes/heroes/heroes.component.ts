import { Component } from '@angular/core';
import { Hero } from 'src/app/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

    hero: Hero = {name:" Wolverine", id: 1};

    constructor(){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
}
}
