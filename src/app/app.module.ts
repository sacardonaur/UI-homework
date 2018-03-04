import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectiveLearningComponent } from './collectiveLearning/collectiveLearning.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { routing  } from './routes.module';

import { HttpClientModule } from '@angular/common/http';
import { CollectiveLearningService } from './collectiveLearning.service'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollectiveLearningComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
   ],
  providers: [CollectiveLearningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
