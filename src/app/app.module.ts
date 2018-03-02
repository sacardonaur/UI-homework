import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { routing  } from './routes.module';

import { HttpClientModule } from '@angular/common/http';
import { TopicService } from './topic.service'; 

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
   ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
