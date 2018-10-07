import { EmojiAreaModule } from './emoji-area.module';

describe('EmojiPickerModule', () => {
  let emojiAreaModule: EmojiAreaModule;

  beforeEach(() => {
    emojiAreaModule = new EmojiAreaModule();
  });

  it('should create an instance', () => {
    expect(emojiAreaModule).toBeTruthy();
  });
});
