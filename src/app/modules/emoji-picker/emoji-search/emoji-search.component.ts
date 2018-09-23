import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Emojis } from '../lib/emojis';
import { Categories } from '../lib/categories';
import { EmojisData, Emoji } from '../lib/data.interfaces';

import * as _ from 'underscore';

@Component({
  selector: 'app-emoji-search',
  templateUrl: './emoji-search.component.html',
  styleUrls: ['./emoji-search.component.scss']
})
export class EmojiSearchComponent implements OnInit {
  @Output() reciveEmoji = new EventEmitter<string>();

  readonly emojis = Emojis;
  categories = Categories;
  value: string;
  emoji: Emoji;
  visibleCategory = 'people';
  filteredEmojis = Emojis;

  constructor() { }

  ngOnInit() { }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }

  scrollTo(category) {
    document.location.hash = '#cat-' + category;
  }

  filterEmojis(searchTerm) {
    this.filteredEmojis = [];
    JSON.parse(JSON.stringify(this.emojis)).forEach( cat => {
      const emojisInCat = cat.emojis.filter(elem => {
        if (elem.keywords) {
          // console.log('elem.keywords.includes(searchTerm)', elem.keywords.includes(searchTerm));
          return elem.keywords.includes(searchTerm);
        } else {
          return false;
        }
      });
      cat.emojis = emojisInCat;
      this.filteredEmojis.push(cat);
    });
  }
}
