import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-note',
  templateUrl: './product-note.component.html',
  styleUrls: ['./product-note.component.sass']
})
export class ProductNoteComponent implements OnInit {

  @Input() myProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
