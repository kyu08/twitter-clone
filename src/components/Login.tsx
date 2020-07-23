import * as React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Login.module.css';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';
import { LoginForm } from './Login/LoginForm';
import UserApplicationService from '../application/User/UserApplicationService';
import Store from '../Store';
import { InvalidLogin } from './Login/InvalidLogin';

type Props = {
  setIsLogin(boolean: boolean): void;
  isLogin: boolean;
};

// this is container component.
export const Login: React.FC<Props> = (props) => {
  const { setIsLogin, isLogin } = props;
  const [screenName, setScreenName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
  const store = Store.useStore();

  const authorize = (screenNameAuth: string, passwordAuth: string): boolean => {
    return UserApplicationService.isAuthorized(screenNameAuth, passwordAuth);
  };

  const login = (): void => {
    const isAuthorized = authorize(screenName, password);
    if (isAuthorized) {
      store.set('screenName')(screenName);
      setIsLogin(true);

      return;
    }
    setIsInvalidLogin(true);
  };

  const handleScreenNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenName(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <div className={classes.Login}>
        <Logo />
        <Message message="Twitterにログイン" />
        {isInvalidLogin && <InvalidLogin />}
        <LoginForm
          login={login}
          screenName={screenName}
          handleScreenNameChange={handleScreenNameChange}
          password={password}
          handlePasswordChange={handlePasswordChange}
        />
      </div>
    </>
  );
};
