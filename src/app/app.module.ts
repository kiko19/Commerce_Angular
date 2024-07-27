import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeFurnitureComponent } from './home-furniture/home-furniture.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PhonesComponent } from './phones/phones.component';
import { SportingComponent } from './sporting/sporting.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { HealthComponent } from './health/health.component';
import { ComputingComponent } from './computing/computing.component';
import { EgyptionComponent } from './egyption/egyption.component';
import { OtherCategoriesComponent } from './other-categories/other-categories.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HomeFurnitureComponent,
    SupermarketComponent,
    FashionComponent,
    ElectronicsComponent,
    PhonesComponent,
    SportingComponent,
    AppliancesComponent,
    HealthComponent,
    ComputingComponent,
    EgyptionComponent,
    OtherCategoriesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
