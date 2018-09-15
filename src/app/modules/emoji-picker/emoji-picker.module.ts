import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiPickerComponent } from './emoji-picker.component';

import { FormsModule } from '@angular/forms';
import { EmojiSearchComponent } from './emoji-search/emoji-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmojiPickerComponent, EmojiSearchComponent],
  exports: [EmojiPickerComponent]
})
export class EmojiPickerModule { }
