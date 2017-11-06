import React from 'react'
import style from './SectionBox.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

const SectionBox = ({children}) => (
    <section className={cx('SectionBox')}>
        {children}
    </section>
)

export default SectionBox;
