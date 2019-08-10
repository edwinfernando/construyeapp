import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-cancelar',
  templateUrl: './header-cancelar.component.html',
  styleUrls: ['./header-cancelar.component.scss'],
})
export class HeaderCancelarComponent implements OnInit {

  @Input() booVolver: boolean;

  constructor() { }

  ngOnInit() {}

}
