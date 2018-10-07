import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiAreaComponent } from './emoji-area.component';
import { EmojiSearchComponent } from './emoji-search/emoji-search.component';


describe('EmojiPickerComponent', () => {
  let component: EmojiAreaComponent;
  let fixture: ComponentFixture<EmojiAreaComponent>;


  const emojisMock = [
    {
      name: 'Monkey Face',
      unified: '1F435',
      emoticons: [':o)'],
      keywords: [
        'animal',
        'nature',
        'circus'
      ],
      sheet: [13, 31],
      shortName: 'monkey_face'
    },
    {
      name: 'Grinning Face',
      unified: '1F600',
      text: ':D',
      keywords: [
        'face',
        'smile',
        'happy',
        'joy',
        ':D',
        'grin'
      ],
      sheet: [30, 24],
      shortName: 'grinning'
    }
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmojiAreaComponent,
        EmojiSearchComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('insertEmoji()', () => {
    const rango = {
      deleteContents: function () { }
    };
    const rangeObject = {
      rangeCount: false,
      getRangeAt: function() { return rango; },
    };

    component.epInput.nativeElement.innerText = '';
    component.openEmojiPicker();
    component.insertEmoji(emojisMock[1]);
    expect(component.epInput.nativeElement.innerText).toBe('😀');

    component.epInput.nativeElement.innerText = 'test';
    component.openEmojiPicker();
    component.insertEmoji(emojisMock[1]);
    expect(component.epInput.nativeElement.innerText).toBe('😀test');


    spyOn(window, 'getSelection').and.returnValue(rangeObject);
    component.openEmojiPicker();
    component.insertEmoji(emojisMock[1]);
    expect(component.epInput.nativeElement.innerText).toBe('😀test');
  });
  it('openEmojiPicker()', () => {
    this.hidePicker = true;
    component.openEmojiPicker();
    expect(this.hidePicker).toBe(true);
  });

});
