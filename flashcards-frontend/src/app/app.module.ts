import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    FlashcardsModule
  ],
  providers: [
  {
   provide: HTTP_INTERCEPTORS,
   useClass: TokenInterceptorService,
   multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
