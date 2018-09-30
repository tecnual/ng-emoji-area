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

    if (!this.sel) {
    this.sel = window.getSelection();
    }
        // IE9 and non-IE
    if (this.sel.getRangeAt && this.sel.rangeCount) {
        this.range = this.sel.getRangeAt(0);
        this.range.deleteContents();

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
        emojiEl.style.paddingRight = '2px';
        emojiEl.contentEditable = 'false';
        emojiEl.title = emoji.name;

        const frag = document.createDocumentFragment();
        frag.appendChild(emojiEl);
        this.range.insertNode(frag);
        this.range = this.range.cloneRange();
        if (emojiEl.nextSibling) {
          this.range.setStartBefore(emojiEl.nextSibling);
        } else {
          this.range.setStartAfter(emojiEl);
          this.range.setEndAfter(emojiEl);
        }
        this.range.collapse(true);
        this.sel.removeAllRanges();
        this.sel.addRange(this.range);
    }
    this.value = this.epInput.nativeElement.innerText;
  }

  openEmojiPicker() {
    this.hidePicker = !this.hidePicker;
  }

  inputFocusOut() {
    this.epInput.nativeElement.focus();
    this.sel = window.getSelection();
  }
}
