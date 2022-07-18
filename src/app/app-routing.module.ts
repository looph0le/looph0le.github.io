import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'

import { BlogsComponent } from './blogs/blogs.component'
import { LinuxBeginnersGuideComponent } from './blogs/linux-beginners-guide/linux-beginners-guide.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blogs/linux-beginners-guide', component: LinuxBeginnersGuideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
