import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  @Input() summaryDet;

  constructor() { }

  ngOnInit(): void {
    console.log(this.summaryDet);
  }

}
