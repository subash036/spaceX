import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './common/footer/footer.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptorService } from './_services/loader-interceptor.service';
// import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DashboardModule } from './dashboard/dashboard.module';
// import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    // NgScrollbarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
