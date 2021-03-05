import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './order/header/header.component';
// import { BodyComponent } from './order/body/body.component';
import { SummaryComponent } from './order/summary/summary.component';
import { AddOnsComponent } from './order/summary/add-ons/add-ons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { OrderFoodComponent } from './order/summary/order-food/order-food.component';
import { OptionsComponent } from './order/summary/options/options.component';
import { ProductNoteComponent } from './order/summary/product-note/product-note.component';
import { AllComponent } from './order/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    // BodyComponent,
    SummaryComponent,
    AddOnsComponent,
    HeaderComponent,
    OrderFoodComponent,
    OptionsComponent,
    ProductNoteComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forRoot([

      { path: 'header', component: HeaderComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
