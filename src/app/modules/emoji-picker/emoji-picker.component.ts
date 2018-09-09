import { Component, EventEmitter, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';

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

  value = '';
  focusClass = 'no-focus';

  constructor() { }

  ngOnInit() {
    if (typeof this.cols === 'undefined') {
      this.cols = 100;
    }
  }

  insertEmoji() {
    this.epInput.nativeElement.focus();
    const algo = 'CONTENIDO';
    let sel, range;
        // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();

        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        const el = document.createElement('div');
        el.innerHTML = algo;
        const frag = document.createDocumentFragment();
        let node, lastNode;
        lastNode = false;
        while ( (node = el.firstChild) ) {
            lastNode = frag.appendChild(node);
            console.log('lastNode', lastNode);
        }
        range.insertNode(frag);

        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    this.value = this.epInput.nativeElement.innerText;
  }
}
