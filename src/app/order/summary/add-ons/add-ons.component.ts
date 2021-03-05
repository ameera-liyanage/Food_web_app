import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.sass']
})
export class AddOnsComponent implements OnInit {

  @Input() addOnDet;


  constructor() { }

  ngOnInit(): void {
  }

}
