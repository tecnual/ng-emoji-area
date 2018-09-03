import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})

export class EmojiPickerComponent implements OnInit {
  @Input() cols: number;
  @Input() rows: number;
  @Input() maxlength: number;


  value: string = '';

  constructor() { }

  ngOnInit() {
    if (typeof this.cols === 'undefined') {
      this.cols = 100;
    }
  }

}
