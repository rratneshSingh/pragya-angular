import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HelperModule } from './modules/helper/helper.module';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './pages/about/team/team.component';
import { AddressComponent } from './pages/about/address/address.component';
import { HoverDirective } from './shared/directives/hover.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    AddressComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HelperModule,
    HttpClientModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: 'home', pathMatch: "full" },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent, 
      children: [
        { path: '', redirectTo: 'team', pathMatch: "full" },
        { path: 'team', component: TeamComponent },
        { path: 'address', component: AddressComponent }
      ] },
    ] )
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
