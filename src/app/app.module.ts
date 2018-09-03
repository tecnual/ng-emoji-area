import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiPickerModule } from './modules/emoji-picker/emoji-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmojiPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
