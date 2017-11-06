import React from 'react';
import styles from './LandingTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LandingTemplate = ({header, children, footer, padding, responsive}) => (
    <div className={cx('page')}>
      <header>
        {header}
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className={cx('innerFooter')}></div>
        {footer}
      </footer>
    </div>
  );


export default LandingTemplate;