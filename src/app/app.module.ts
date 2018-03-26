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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarRatingModule } from 'angular-star-rating';
import { MatIconModule } from '@angular/material/icon';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AddDetailComponent } from './collectiveLearning/Dialog/add-detail/add-detail.component';
import { EditDialogComponent } from './collectiveLearning/Dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './collectiveLearning/Dialog/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectiveLearningComponent,
    AddDetailComponent,
    EditDialogComponent,
    DeleteDialogComponent,
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
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule, 
    StarRatingModule,
    MatAutocompleteModule,
    MatTooltipModule,
  ],
  entryComponents: [
    AddDetailComponent,
    EditDialogComponent,
    DeleteDialogComponent,
  ],
  providers: [CollectiveLearningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
