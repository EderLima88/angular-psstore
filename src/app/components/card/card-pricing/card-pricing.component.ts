import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit{
  @Input()
  gameType:string = "TsTsTsTs"
  @Input()
  gamePrice:string = "R$ 333,90"

  constructor(){}

  ngOnInit(): void {

  }

}
