import { IUser } from './IUser';
import Profile from './Profile/Profile';
import UserId from './UserId/UserId';
import Following from './Following/Following';
import Follower from './Follower/Follower';

interface UserProps {
  readonly follower: Follower;
  readonly following: Following;
  readonly profile: Profile;
  readonly userId: UserId;
}

export class User implements IUser {
  readonly follower: Follower;

  readonly following: Following;

  // todo あとImage系の実装
  readonly profile: Profile;

  // todo まだ中身実装してない
  readonly userId: UserId;

  constructor(props: UserProps) {
    const { follower, following, profile, userId } = props;
    this.follower = follower;
    this.following = following;
    this.profile = profile;
    this.userId = userId;
  }

  private getFollower(): Follower {
    return this.follower;
  }

  private getFollowing(): Following {
    return this.following;
  }

  follow(userId: UserId): User {
    const following = this.getFollowing().follow(userId);
    const props = { ...this, following };

    return new User(props);
  }

  unFollow(userId: UserId): User {
    const following = this.getFollowing().unFollow(userId);
    const props = { ...this, following };

    return new User(props);
  }

  followed(userId: UserId): User {
    const follower = this.getFollower().followed(userId);
    const props = { ...this, follower };

    return new User(props);
  }

  unFollowed(userId: UserId): User {
    const follower = this.getFollower().unFollowed(userId);
    const props = { ...this, follower };

    return new User(props);
  }
}
