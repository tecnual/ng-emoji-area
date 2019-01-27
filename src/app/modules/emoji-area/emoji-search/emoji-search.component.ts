import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Emojis } from '../lib/emojis';
import { Categories } from '../lib/categories';
import { Emoji } from '../lib/data.interfaces';

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
  onTabChecked: Boolean = false;

  constructor() { }

  ngOnInit() { }

  insertEmoji(emoji) {
    this.emoji = emoji;
    this.reciveEmoji.emit(emoji);
  }

  scrollToCat(categoryId) {
    this.onTabChecked = true;
    const target = document.getElementById('cat-' + categoryId) as HTMLInputElement;
    const container = document.getElementById('ea-categories-container') as HTMLInputElement;
    const top = (target.offsetTop - 90);
    container.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
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
