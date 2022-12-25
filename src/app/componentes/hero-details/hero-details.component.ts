import {Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit{
    hero!: Hero;

    constructor(
        private heroService: HeroService,
        private location: Location,
        private route: ActivatedRoute,
        ){}

    ngOnInit(): void {
        this.getHero();
    }

    getHero():void{
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id).subscribe(hero=> this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }

}
