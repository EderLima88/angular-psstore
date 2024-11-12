import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = "xxxxxxx"
  @Input()
  gamePrice:string = "R$ 111,90"


  constructor(){}

  ngOnInit(): void {
    
  }
}
