import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSearchComponent } from './emoji-search.component';
import { Emojis } from '../lib/emojis';
import { EmojiData } from '../lib/data.interfaces';

describe('EmojiSearchComponent', () => {
  let component: EmojiSearchComponent;
  let fixture: ComponentFixture<EmojiSearchComponent>;
  const emojis = Emojis;
  const emoji = emojis[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('insertEmoji', () => {
    component.insertEmoji(emoji);
    expect(component.emoji.name).toBe(emoji.name);
  });

  it('scrollTo', () => {
    component.scrollTo('category');
    expect(document.location.hash).toBe('#cat-category');
  });

  it('filterEmojis', () => {
    component.filterEmojis('smile');
    expect(component.filteredEmojis[0].emojis.length).toBe(16);
  });

});
