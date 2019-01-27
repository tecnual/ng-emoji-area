import { Component } from '@angular/core';

/**
 * The main component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * the title
   */
  title = 'ng-emoji-area';
  /**
   * Default text
   */
  text = 'Texto dentro del textarea';
}
