import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewscoppyComponent } from './newscoppy/newscoppy.component';
import{ HttpClientModule} from '@angular/common/http'

const link:Routes=[
  {path:"",component:NewscoppyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewscoppyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
