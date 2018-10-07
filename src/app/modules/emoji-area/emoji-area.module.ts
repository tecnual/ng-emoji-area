import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiAreaComponent } from './emoji-area.component';

import { FormsModule } from '@angular/forms';
import { EmojiSearchComponent } from './emoji-search/emoji-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmojiAreaComponent, EmojiSearchComponent],
  exports: [EmojiAreaComponent]
})
export class EmojiAreaModule { }
