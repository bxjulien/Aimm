import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss']
})
export class ButtonOutlineComponent implements OnInit {

  @Input() text;
  @Input() iconPath;
  @Input() iconAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
