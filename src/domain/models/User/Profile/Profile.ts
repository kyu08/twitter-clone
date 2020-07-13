import { IProfile, ProfileProps } from './IProfile';
import Bio from './Bio';
import UserLocation from './UserLocation';
import ScreenName from './ScreenName';
import UserName from './UserName';
import Website from './Website';
import Birthday, { IBirthday } from './Birthday';
import UserImage from './UserImage';
import HeaderImage from './HeaderImage';

export default class Profile implements IProfile {
  readonly screenName: ScreenName;

  readonly userName: UserName;

  readonly headerImage: HeaderImage;

  readonly userImage: UserImage;

  readonly bio: Bio;

  readonly birthday: Birthday;

  readonly userLocation: UserLocation;

  readonly website: Website;

  constructor(props: ProfileProps) {
    const {
      screenName,
      userName,
      headerImage,
      userImage,
      bio,
      birthday,
      userLocation,
      website,
    } = props;
    this.userName = userName;
    this.screenName = screenName;
    this.headerImage = headerImage;
    this.userImage = userImage;
    this.bio = bio;
    this.birthday = birthday;
    this.userLocation = userLocation;
    this.website = website;
  }

  updateBio(bioString: string): Profile {
    const bio = new Bio(bioString);
    const updatedProps = { ...this, bio };

    return new Profile(updatedProps);
  }

  updateBirthday(birthdayProps: IBirthday): Profile {
    const birthday = new Birthday(birthdayProps);
    const updatedProps = { ...this, birthday };

    return new Profile(updatedProps);
  }

  updateUserLocation(userLocationString: string): Profile {
    const userLocation = new UserLocation(userLocationString);
    const updatedProps = { ...this, userLocation };

    return new Profile(updatedProps);
  }

  updateWebsite(webSiteString: string): Profile {
    const website = new Website(webSiteString);
    const updatedProps = { ...this, website };

    return new Profile(updatedProps);
  }

  updateUserName(userNameString: string): Profile {
    const userName = new UserName(userNameString);
    const updatedProps = { ...this, userName };

    return new Profile(updatedProps);
  }
}