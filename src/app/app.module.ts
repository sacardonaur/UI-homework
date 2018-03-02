import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';

import { PageNotFoundComponent } from './page-not-found.component';
import { routing  } from './routes.module';

import { HttpClientModule } from '@angular/common/http';
import { TopicService } from './topic.service'; 

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RatingModule } from 'primeng/rating';
import { DragDropModule } from 'primeng/dragdrop';
import { DataTableModule } from 'primeng/datatable';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    RatingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DragDropModule,
    DataTableModule,
    CardModule,
    TabMenuModule

   ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
