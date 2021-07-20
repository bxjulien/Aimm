import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() iconPath;
  @Input() iconAlt;

  @Input() title;
  @Input() description;
  
  constructor() { }

  ngOnInit(): void {
  }

}
