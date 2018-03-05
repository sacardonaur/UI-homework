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

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
   ],
  providers: [CollectiveLearningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
