import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiAreaModule } from './modules/emoji-area/emoji-area.module';

/**
 * The bootstrapper module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmojiAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
