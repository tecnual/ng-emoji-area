import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Emojis } from '../lib/emojis';
import { Categories } from '../lib/categories';
import { Emoji } from '../lib/data.interfaces';

import * as _ from 'underscore';

@Component({
  selector: 'app-emoji-search',
  templateUrl: './emoji-search.component.html'
})
export class EmojiSearchComponent implements OnInit {
  @ViewChild('eaSearchInput') eaSearchInput: ElementRef;
  @Output() reciveEmoji = new EventEmitter<string>();

  readonly emojis = Emojis;
  categories = Categories;
  value: string;
  emoji: Emoji;
  visibleCategory = 'people';
  filteredEmojis = Emojis;
  onTabChecked: boolean = false;

  constructor() { }

  ngOnInit() { }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }

  scrollToCat(categoryId) {
    this.onTabChecked = true;
    document.querySelector('#cat-' + categoryId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setTimeout(() => {
      this.onTabChecked = false;
    }, 2000);
  }

  filterEmojis(searchTerm) {
    this.filteredEmojis = [];
    JSON.parse(JSON.stringify(this.emojis)).forEach( cat => {
      const emojisInCat = cat.emojis.filter(elem => {
        if (searchTerm === '') {
          return true;
        }
        if (elem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        if (elem.keywords) {
          return elem.keywords.includes(searchTerm);
        } else {
          return false;
        }
      });
      cat.emojis = emojisInCat;
      this.filteredEmojis.push(cat);
    });
  }

  onScroll(event) {
    if (this.onTabChecked) {return; }
    this.categories.forEach((cat) => {
      const catPosition = document.getElementById('cat-' + cat.id).offsetTop;
      if (catPosition < event.target.scrollTop + 90) {
        const elem = document.getElementById('tab-' + cat.id) as HTMLInputElement;
        elem.checked = true;
      }
    });
  }
}
