import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.sass']
})
export class AllComponent implements OnInit {

  orderSummary = [
    {
      "summaryImage": "",
      "orderNumber": "",
      "summaryName": "",
      "summaryDate": "",
      "shopIcon": "",
      "shopName": "",
      "locationIcon": "",
      "locationName": "",
      "callIcon": "",
      "number": "",
      "summaryStatus": "",
      "orderPrice": "",
      "orderFood": [
            {
              "orderImage": "",
              "quantity": "",
              "orderName": "",
              "price": ""
            },
            {
              "orderImage": "",
              "quantity": "",
              "orderName": "",
              "price": ""
            }
          ],
      "option": [
            {
              "name": "",
              "price": ""
            }
          ],
      "addOn": [
            {
              "quantity": "1 X",
              "addonName": "Beef Pepperoni Pizza",
              "addonPrice": "$5.00",
            },
            {
              "quantity": "1 X",
              "addonName": "Beef Pepperoni Pizza",
              "addonPrice": "$5.00",
            }
          ],
          
      "myProduct": [
            {
              "name": "",
              "date": "",
              "profileImage": "",
              "description": "",
              "foodImages1": "", 
              "foodImages2": "", 
              "foodImages3": "", 
              "foodImages4": "", 
            },
            {
              "name": "",
              "date": "",
              "profileImage": "",
              "description": "",
              "foodImages1": "", 
              "foodImages2": "", 
              "foodImages3": "", 
              "foodImages4": "",  
            },
            {
              "name": "",
              "date": "",
              "profileImage": "",
              "description": "",
              "foodImages1": "", 
              "foodImages2": "", 
              "foodImages3": "", 
              "foodImages4": "", 
            }
      ]
    }   
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.orderSummary);
  }

}
