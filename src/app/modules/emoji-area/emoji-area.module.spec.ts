import { EmojiAreaModule } from './emoji-area.module';

describe('EmojiAreaModule', () => {
  let emojiAreaModule: EmojiAreaModule;

  beforeEach(() => {
    emojiAreaModule = new EmojiAreaModule();
  });

  it('should create an instance', () => {
    expect(emojiAreaModule).toBeTruthy();
  });
});
