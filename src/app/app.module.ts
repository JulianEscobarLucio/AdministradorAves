import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

//componentes
import { AppComponent } from './app.component';
import { AveAddComponent } from './components/ave-add.component'
import { AveListComponent } from './components/ave-lista.component'
import { AveEditComponent } from './components/ave-edit.component'
import { FormsModule }   from '@angular/forms';
//Rutas
import { routing, appRoutingProviders } from './app.routing'; 


import { AveService } from './services/ave.service';

@NgModule({
  declarations: [
    AppComponent,
    AveAddComponent,
    AveListComponent,
    AveEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    FormsModule    
  ],
  providers: [
    appRoutingProviders,AveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
