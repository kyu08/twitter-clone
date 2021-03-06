import { IUser } from '../domain/models/User/IUser';
import Profile from '../domain/models/User/Profile/Profile';
import UserId from '../domain/models/User/UserId/UserId';
import ScreenName from '../domain/models/User/Profile/ScreenName';
import UserName from '../domain/models/User/Profile/UserName';
import HeaderImageURL from '../domain/models/User/Profile/HeaderImageURL';
import UserImageURL from '../domain/models/User/Profile/UserImageURL';
import Bio from '../domain/models/User/Profile/Bio';
import Birthday from '../domain/models/User/Profile/Birthday';
import UserLocation from '../domain/models/User/Profile/UserLocation';
import Website from '../domain/models/User/Profile/Website';
import { User } from '../domain/models/User/User';
import Day from '../domain/models/User/Profile/Birthday/Day';
import Month from '../domain/models/User/Profile/Birthday/Month';
import Year from '../domain/models/User/Profile/Birthday/Year';

export interface IProps {
  day: number;
  month: number;
  year: number;
  bio: string;
  headerImageURL: string;
  userLocation: string;
  screenName: string;
  userName: string;
  userImageURL: string;
  website: string;
  userId: string;
}

export interface IUserProps {
  day: Day;
  month: Month;
  year: Year;
  bio: Bio;
  headerImageURL: HeaderImageURL;
  userLocation: UserLocation;
  screenName: ScreenName;
  userName: UserName;
  userImageURL: UserImageURL;
  website: Website;
  userId: UserId;
  tweetCount: number;
}

const userFactory = ({
  bio,
  day,
  headerImageURL,
  month,
  screenName,
  userId,
  userImageURL,
  userLocation,
  userName,
  website,
  year,
  tweetCount,
}: IUserProps) => {
  const birthday = new Birthday({ day, month, year });
  const profile = new Profile({
    birthday,
    bio,
    headerImageURL,
    screenName,
    userImageURL,
    userLocation,
    userName,
    website,
  });

  return new User({
    profile,
    tweetCount,
    userId,
    followingMap: new Map(),
    followerMap: new Map(),
  });
};

const userA = userFactory({
  day: new Day(29),
  month: new Month(5),
  year: new Year(1996),
  bio: new Bio('hello'),
  headerImageURL: new HeaderImageURL('kyukyu'),
  userLocation: new UserLocation('tokyo'),
  screenName: new ScreenName('kyu08'),
  userName: new UserName('kyuushima'),
  userImageURL: new UserImageURL('kyu'),
  website: new Website('kyu08.com'),
  userId: new UserId('e15a1c26-9a65-4f89-91b0-99b2055ae26f'),
  tweetCount: 1,
});

const userB = userFactory({
  day: new Day(15),
  month: new Month(1),
  year: new Year(1919),
  bio: new Bio('i am userId 1'),
  headerImageURL: new HeaderImageURL('hoge'),
  userLocation: new UserLocation('hokkaido'),
  screenName: new ScreenName('test1'),
  userName: new UserName('test_user_1'),
  userImageURL: new UserImageURL('te'),
  website: new Website('testUser1.com'),
  userId: new UserId('bad9996f-c846-4d86-9868-da57e19427f8'),
  tweetCount: 1,
});

const userC = userFactory({
  day: new Day(1),
  month: new Month(1),
  year: new Year(2020),
  bio: new Bio('fugafuga'),
  headerImageURL: new HeaderImageURL('hogehoge'),
  userLocation: new UserLocation('chiba'),
  screenName: new ScreenName('test2'),
  userName: new UserName('test_dayo2'),
  userImageURL: new UserImageURL('test2'),
  website: new Website('test2.com'),
  userId: new UserId('7e275e25-e12f-408b-b3e7-32a65c1553cc'),
  tweetCount: 1,
});

export const inMemoryUserMap: Map<string, IUser> = new Map([
  [userA.userId.userId, userA],
  [userB.userId.userId, userB],
  [userC.userId.userId, userC],
]);
