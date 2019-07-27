import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  ic_back = '/assets/icon/ic_back.svg';
  @Input() titulo: string;
  constructor(private location: Location) { }

  ngOnInit() {}

  myBackButton() {
    this.location.back();
  }
}
