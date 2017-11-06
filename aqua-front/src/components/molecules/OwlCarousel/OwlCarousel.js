import React from 'react';
import style from './OwlCarousel.scss';
import Carousel from 'react-owl-carousel';
import classNames from 'classnames/bind';
import img1 from 'static/images/1.jpg';
import img2 from 'static/images/2.jpg';
import img3 from 'static/images/3.png';

const cx = classNames.bind(style);

const OwlCarousel = () => {
        const state = {
            options: {
                items:1,
                loop: true,
                nav:true,
                slideSpeed : 300,
                paginationSpeed : 400
            },

            items: [
                <div className={cx('item')} key={1}><img src={img1} /></div>,
                <div className={cx('item')} key={2}><img src={img2} /></div>,
                <div className={cx('item')} key={2}><img src={img3} /></div>,
            ],
        }
    return(
        <div>
        <Carousel
            ref={inst => this.slider = inst}
            className="owl-theme"
            {...state.options}
        >
            {state.items}
        </Carousel>
        </div>
    )
}
   
export default OwlCarousel;