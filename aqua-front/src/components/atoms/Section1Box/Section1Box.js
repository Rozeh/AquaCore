import React from 'react';
import style from './Section1Box.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Section1Box = ({children}) => (
    <section className={cx('Section1Box')}>
    {children}
    </section>
);

export default Section1Box;