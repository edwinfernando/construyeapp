import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-fotos',
  templateUrl: './item-fotos.component.html',
  styleUrls: ['./item-fotos.component.scss'],
})
export class ItemFotosComponent implements OnInit {

  imagen: string;
  @Input() etiqueta: string;

  constructor() { }

  ngOnInit() {}

}
