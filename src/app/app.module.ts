import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { QcmThemesComponent } from './components/qcm-themes/qcm-themes.component';
import { QcmChoiceComponent } from './components/qcm-choice/qcm-choice.component';
import { QcmQuestionsComponent } from './components/qcm-questions/qcm-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribeComponent,
    QcmThemesComponent,
    QcmChoiceComponent,
    QcmQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
