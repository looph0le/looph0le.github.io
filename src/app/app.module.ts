import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { LinuxBeginnersGuideComponent } from './blogs/linux-beginners-guide/linux-beginners-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    HomeComponent,
    LinuxBeginnersGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
