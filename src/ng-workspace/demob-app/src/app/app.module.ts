import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmlpoyeeFormComponent} from './emlpoyee-form/emlpoyee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmlpoyeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [EmlpoyeeFormComponent]
})
export class AppModule { }