import { IContent } from './IContent';

export default class Content implements IContent {
  readonly content: string;

  constructor(content: string) {
    if (Content.isInvalid(content)) throw new Error('Tweet length error!');
    this.content = content;
  }

  private static isInvalid(content: string): boolean {
    const MIN_TWEET_LENGTH = 1;
    const MAX_TWEET_LENGTH = 140;
    const isShort = content.length < MIN_TWEET_LENGTH;
    const isLong = content.length > MAX_TWEET_LENGTH;

    return isShort || isLong;
  }
}
