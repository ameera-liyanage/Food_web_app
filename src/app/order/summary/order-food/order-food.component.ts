import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.sass']
})
export class OrderFoodComponent implements OnInit {

  @Input() orderFoodDet;

  constructor() { }

  ngOnInit(): void {
  }

}
