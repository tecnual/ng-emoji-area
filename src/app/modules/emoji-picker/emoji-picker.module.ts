import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiPickerComponent } from './emoji-picker.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmojiPickerComponent],
  exports: [EmojiPickerComponent]
})
export class EmojiPickerModule { }
