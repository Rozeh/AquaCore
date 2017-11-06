import React from 'react';
import style from './BigAndMini2.scss';
import classNames from 'classnames/bind';

import {HoverCard, SectionWithTitle } from 'components';

const cx = classNames.bind(style);

const state = {
    img:[
        { id:1, 
          title:"테스트1", 
          isBigAndMini: true,
          imgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/large/1fcfec75-2439-4149-8bb6-e7fd69aa2003.jpg'
        },
        {  
            id:2, 
            title:"테스트2", 
            subTitle:"서브타이틀2",
            isBigAndMini: false,
            imgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg',
            subImgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg'
        },
        {  
            id:3, 
            title:"테스트3", 
            subTitle:"서브타이틀3",
            isBigAndMini: false,
            imgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg',
            subImgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg'
        },
        {  
            id:4, 
            title:"테스트4", 
            subTitle:"서브타이틀4",
            isBigAndMini: false,
            imgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg',
            subImgSrc:'https://image.laftel.net/static/img/item_kor/thumbs/big/372015df-1855-46e2-902e-606f8992d1da.jpg'
        },
    ]
}



const BigAndMini2 = () => {
    return(
        <SectionWithTitle title="빅엔미니">
            <div className={cx('fg0')}>
            {state.img.map(img =>
                (img.isBigAndMini?
                <div className={cx('fg2')} > 
                <HoverCard className={img.isBigAndMini} 
                    style={{backgroundImage:`url(${img.imgSrc})`}}>
                    <div className={cx('layer')}>
                        <div className={cx('BMT1')}>{img.title}</div>
                    </div>
                </HoverCard>
                </div>
                :
                <div className={cx('fg1')}>
                <HoverCard className={img.isBigAndMini} 
                    style={{backgroundImage:`url(${img.subImgSrc})`}}>
                    <div className={cx('layer')}>
                        <div className={cx('BMT2')}>{img.title}</div>
                    </div>
                </HoverCard>
                <HoverCard className={img.isBigAndMini} 
                    style={{backgroundImage:`url(${img.subImgSrc})`}}>
                    <div className={cx('layer')}>
                        <div className={cx('BMT2')}>{img.subTitle}</div>
                    </div>
                </HoverCard>
                </div>
            ))}
            </div>
        </SectionWithTitle>
    )
}

export default BigAndMini2;