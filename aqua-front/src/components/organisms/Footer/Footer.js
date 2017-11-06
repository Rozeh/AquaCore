import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Logo, HeaderNav, Button, UserButton } from 'components';

const cx = classNames.bind(styles);

const Footer = ({
  onLoginButtonClick,
  user,
  solid
}) => {
  return (
    <div className={cx('footer', { solid })}>
      <div className={cx('responsive')}>
        <div className={cx('logo-wrapper')}>
          <Logo/>
        </div>
        <div className={cx('right-side')}>
          <HeaderNav/>
          {
            user ? (
              <UserButton displayName={user.get('displayName')}/>
            ) : (
              <Button 
                invert 
                className={cx('login-button')}
                onClick={onLoginButtonClick}>
                로그인
              </Button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;