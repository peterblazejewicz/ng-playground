import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClipboardService } from './clipboard.service';
import { ClipboardDirective } from './clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClipboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
