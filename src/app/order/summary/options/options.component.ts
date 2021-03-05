import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {

  @Input() optionDet;

  constructor() { }

  ngOnInit(): void {
  }

}
