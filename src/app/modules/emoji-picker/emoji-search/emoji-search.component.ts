import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Emojis } from '../lib/emojis';
import { CompressedEmojiData, EmojiCategory } from '../lib/data.interfaces';
import { Categories } from '../lib/categories';


@Component({
  selector: 'app-emoji-search',
  templateUrl: './emoji-search.component.html',
  styleUrls: ['./emoji-search.component.scss']
})
export class EmojiSearchComponent implements OnInit {
  // emojis = Emojis;
  @Output() reciveEmoji = new EventEmitter<string>();

  emojis: Array<CompressedEmojiData>;
  categories: Array<EmojiCategory>;
  value: string;
  emojisByCategory: Array<any>;
  emoji: CompressedEmojiData;
  visibleCategory = 'people';

  constructor(

  ) {
      this.emojis = Emojis;
      this.categories = Categories;
      this.emojisByCategory = [];
      this.categories.forEach( (cat) => {
          const emojisInCategory = this.emojis.filter((e) => {
          return cat.emojis.includes(e.unified);
        });
        cat.emojis = emojisInCategory;
        this.emojisByCategory.push(cat);
      });
  }

  ngOnInit() {
  }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }
}
