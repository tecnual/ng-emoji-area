import { Component, EventEmitter, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})

export class EmojiPickerComponent implements OnInit {
  @Input() cols: number;
  @Input() rows: number;
  @Input() maxlength: number;
  @ViewChild('epInput') epInput: ElementRef;

  focusClass = 'no-focus';
  hidePicker = true;
  value = '';
  sel: Selection;
  range: Range;

  constructor() { }

  ngOnInit() {
  }

  insertEmoji(emoji) {
    this.epInput.nativeElement.focus();

        // IE9 and non-IE
    if (this.sel.getRangeAt && this.sel.rangeCount) {

        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        const emojiEl = document.createElement('span');
        const codePoint = parseInt(emoji.unified, 16);
        emojiEl.innerHTML = String.fromCodePoint(codePoint);
        emojiEl.style.backgroundImage = 'url("https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/16.png")';
        emojiEl.style.width = '18px';
        emojiEl.style.height = '18px';
        emojiEl.style.backgroundPosition = (emoji.sheet[0] * -18) + 'px ' + (emoji.sheet[1] * -18) + 'px';
        emojiEl.style.backgroundColor = 'rgba(0,0,0,0)';
        emojiEl.style.color = 'rgba(0,0,0,0)';
        emojiEl.style.marginRight = '2px';
        emojiEl.contentEditable = 'false';
        emojiEl.title = emoji.name;

        const frag = document.createDocumentFragment();
        frag.appendChild(emojiEl);
        this.range.insertNode(frag);
        this.sel.removeAllRanges();
        this.range = this.range.cloneRange();
        this.range.setStartBefore(emojiEl.nextSibling);
        this.range.collapse(true);
        this.sel.addRange(this.range);
    }
    this.value = this.epInput.nativeElement.innerText;
  }

  openEmojiPicker() {
    this.hidePicker = !this.hidePicker;
  }

  inputFocusOut() {
    this.sel = window.getSelection();
    this.range = this.sel.getRangeAt(0);
    this.range.deleteContents();
  }
}
