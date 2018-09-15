import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Emojis } from '../lib/emojis';
import { CompressedEmojiData } from '../lib/data.interfaces';


@Component({
  selector: 'app-emoji-search',
  templateUrl: './emoji-search.component.html',
  styleUrls: ['./emoji-search.component.scss']
})
export class EmojiSearchComponent implements OnInit {
  // emojis = Emojis;
  @Output() reciveEmoji = new EventEmitter<string>();
  emoji: CompressedEmojiData;

  value: string;
  emojis = Emojis;

  constructor() {
  }

  ngOnInit() {
  }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }
}
