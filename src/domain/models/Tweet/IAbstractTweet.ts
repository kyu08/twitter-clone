import TweetId from './TweetId';
import UserId from '../User/UserId';
import RetweetMap from './RetweetMap';
import Content from './Content';
import LikeSet from './LikeSet';

export interface AbstractTweetProps {
  // protedted にできるやつはしよう
  readonly tweetId: TweetId;
  readonly userId: UserId;
  readonly content: Content;
  readonly retweetMap: RetweetMap;
  readonly likeSet: LikeSet;
  readonly tweetedAt: Date;
  readonly updatedAt: Date;
}

export interface IAbstractTweet extends AbstractTweetProps {
  like(): any;
  cancelLike(): any;
  retweet(): any;
  cancelRetweet(): any;
  returnUpdatedInstance(): any;
}
