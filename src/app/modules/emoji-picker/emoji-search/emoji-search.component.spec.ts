import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

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

  it('scrollTo', fakeAsync(() => {
    component.onTabChecked = true;
    component.scrollToCat('objects');
    tick(2100);
    expect(component.onTabChecked).toBe(false);
  }));

  it('filterEmojis', () => {
    component.filterEmojis('smile');
    expect(component.filteredEmojis[0].emojis.length).toBe(17);
    component.filterEmojis('');
    expect(component.filteredEmojis[0].emojis.length).toBe(447);
  });

  it('onScroll', () => {
    const event = {
      target: {
        scrollTop: 100
      }
    };
    const elem = document.getElementById('tab-people') as HTMLInputElement;
    elem.checked = false;
    component.onTabChecked = true;
    component.onScroll(event);
    expect(elem.checked).toBe(false);

    component.onTabChecked = false;
    component.onScroll(event);
    expect(elem.checked).toBe(true);
  });
});
