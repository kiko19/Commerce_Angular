import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ComputingComponent } from './computing/computing.component';
import { EgyptionComponent } from './egyption/egyption.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HealthComponent } from './health/health.component';
import { HomeFurnitureComponent } from './home-furniture/home-furniture.component';
import { PhonesComponent } from './phones/phones.component';
import { SportingComponent } from './sporting/sporting.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { OtherCategoriesComponent } from './other-categories/other-categories.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"appliances",component:AppliancesComponent},
  {path:"computing",component:ComputingComponent},
  {path:"egyption",component:EgyptionComponent},
  {path:"electronics",component:ElectronicsComponent},
  {path:"fashion",component:FashionComponent},
  {path:"health",component:HealthComponent},
  {path:"home-furniture",component:HomeFurnitureComponent},
  {path:"phones",component:PhonesComponent},
  {path:"sporting",component:SportingComponent},
  {path:"supermarket",component:SupermarketComponent},
  {path:"other-cat",component:OtherCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
