import React from 'react';
import styles from './HoverCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HoverCard = ({className, ...rest}) => {
  const ob = className? 'Big' : 'Mini'
  return (
    <div className={cx('hover-card', ob)}{...rest}>
      
    </div>
  );
};

export default HoverCard;