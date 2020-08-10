import * as React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './LoginContainer.module.css';
import { Logo } from './Login/Logo';
import { Message } from './Login/Message';
import { LoginForm } from './Login/LoginForm';
import UserApplicationService from '../application/UserApplicationService';
import Store from '../Store';
import { AlertMessage } from './Login/AlertMessage';

type Props = {
  setIsLogin(boolean: boolean): void;
  isLogin: boolean;
};

// todo container と presentation にわけよう
// this is container component.
export const LoginContainer: React.FC<Props> = (props) => {
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
    const userId = UserApplicationService.returnUserIdByScreenName(screenName);
    const userIdJSON = JSON.stringify(userId);

    if (isAuthorized) {
      store.set('userId')(userIdJSON);
      setIsLogin(true);

      return;
    }
    setIsInvalidLogin(true);
  };

  const handleChangeScreenName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenName(e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      {isLogin && <Redirect to="/" />}
      <div className={classes.Login}>
        <Logo />
        <Message message="Twitterにログイン" />
        {isInvalidLogin && (
          <AlertMessage alertMessage="入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。" />
        )}
        <LoginForm
          login={login}
          screenName={screenName}
          handleChangeScreenName={handleChangeScreenName}
          password={password}
          handleChangePassword={handleChangePassword}
        />
      </div>
    </>
  );
};