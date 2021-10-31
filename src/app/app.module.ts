import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngmaterialModule } from "./AngularMaterial/angmaterial.module";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { EventBindingComponent } from './Components/event-binding/event-binding.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';

@NgModule({
    declarations: [
        AppComponent,
        InterpolationComponent,
        EventBindingComponent,
        ShoppingCartComponent,
        DataBindingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngmaterialModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
