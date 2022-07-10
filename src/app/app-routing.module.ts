import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ServicesComponent } from './services/services.component'
import { SolutionsComponent } from './solutions/solutions.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'portfolio' , component: PortfolioComponent },
  { path: 'service' , component: ServicesComponent },
  { path: 'solutions' , component: SolutionsComponent },
  { path: 'contact' , component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

