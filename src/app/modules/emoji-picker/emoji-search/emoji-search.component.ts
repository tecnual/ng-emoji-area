import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Emojis } from '../lib/emojis';
import { Categories } from '../lib/categories';
import { EmojisData, Emoji } from '../lib/data.interfaces';

@Component({
  selector: 'app-emoji-search',
  templateUrl: './emoji-search.component.html',
  styleUrls: ['./emoji-search.component.scss']
})
export class EmojiSearchComponent implements OnInit {
  // emojis = Emojis;
  @Output() reciveEmoji = new EventEmitter<string>();

  emojis = Emojis;
  categories = Categories;
  value: string;
  emoji: Emoji;
  visibleCategory = 'people';

  constructor(

  ) {
  }

  ngOnInit() {
  }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }
}
