import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-alimentos',
  templateUrl: './item-alimentos.component.html',
  styleUrls: ['./item-alimentos.component.scss'],
})
export class ItemAlimentosComponent implements OnInit {

  @Input() alimento: string;
  @Input() img_alimento: string;
  clickable = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(click: boolean) {
    this.clickable = !click;
  }
}
