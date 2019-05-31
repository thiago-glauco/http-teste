import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//MaterialDesign
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {FlexLayoutModule} from '@angular/flex-layout' //Waiting fx-flex bug fix
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WebService } from './services/web.service';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WebService]
})
export class AppModule { }
