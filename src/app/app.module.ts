import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GeneroPipe } from './pipes/genero.pipe';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './componentes/new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';





@NgModule({
  declarations: [
    AppComponent,
    GeneroPipe,
    ToolbarComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    KnobModule,
    ToolbarModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    CommonModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule, 
  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
