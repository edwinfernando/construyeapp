import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-habitos',
  templateUrl: './items-habitos.component.html',
  styleUrls: ['./items-habitos.component.scss'],
})
export class ItemsHabitosComponent implements OnInit {

  @Input() habitos: string;

  constructor() { }

  ngOnInit() {}

  getFontSize() {
    if (this.habitos.length > 15) {
      return '0.7em';
    }
  }
}
