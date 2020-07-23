import * as React from 'react';
import classes from './Header.module.css';

type Props = {
  logout(): void;
};

export const Header: React.FC<Props> = (props) => {
  const { logout } = props;

  return (
    <div className={classes.Header}>
      Header
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};