import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiPickerComponent } from './emoji-picker.component';

describe('EmojiPickerComponent', () => {
  let component: EmojiPickerComponent;
  let fixture: ComponentFixture<EmojiPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiPickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('insertEmoji()', () => {
    const emoji = 'CONTENIDO';
    component.epInput.nativeElement.innerText = 'test';
    component.insertEmoji();
    expect(component.epInput.nativeElement.innerText).toBe(emoji + 'test');

    spyOn(window, 'getSelection').and.returnValue({rangeCount: false});
    component.insertEmoji();
    expect(component.epInput.nativeElement.innerText).toBe(emoji + 'test');
  });
});
