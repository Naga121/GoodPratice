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
import { FormBindingComponent } from './Components/form-binding/form-binding.component';
import { StructuralDirectivesComponent } from './Components/structural-directives/structural-directives.component';
import { ProductComponent } from './Components/structural-directives/product/product.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { SliderComponent } from './Components/slider/slider.component';
import { GridComponent } from './Components/grid/grid.component';
import { AddcartComponent } from './Components/addcart/addcart.component';
import { TdfComponent } from './Components/tdf/tdf.component';
import { ObjrefComponent } from './Components/objref/objref.component';
import { FormvalidComponent } from './Components/formvalid/formvalid.component';
import { CustomEventsComponent } from './Components/custom-events/custom-events.component';
import { CustomEventProductComponent } from './Components/custom-events/custom-event-product/custom-event-product.component';

@NgModule({
    declarations: [
        AppComponent,
        InterpolationComponent,
        EventBindingComponent,
        ShoppingCartComponent,
        DataBindingComponent,
        FormBindingComponent,
        StructuralDirectivesComponent,
        ProductComponent,
        PipesComponent,
        SliderComponent,
        GridComponent,
        AddcartComponent,
        TdfComponent,
        ObjrefComponent,
        FormvalidComponent,
        CustomEventsComponent,
        CustomEventProductComponent,
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
