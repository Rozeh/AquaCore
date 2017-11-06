import React from 'react'
import style from './BigAndMini.scss'
import classNames from 'classnames/bind'
import {HoverCard, FlexBox, SectionWithTitle} from 'components'
import img1 from 'static/images/3.png'
const cx = classNames.bind(style)

const state = {
    img:[
        {id:1, title:"이름은 누구시요?", isBigAndMini:true, imgUrl:'https://www.inflearn.com/wp-content/uploads/jsp001.png'},
        {id:2, 
         title:"테스트2", 
         subTitle:"서브타이틀 테스트2", 
         isBigAndMini:false, 
         imgUrl:'https://www.inflearn.com/wp-content/uploads/vue.png',
         subImgUrl:'https://www.inflearn.com/wp-content/uploads/unitycourse.png'
        },
        {id:3, 
         title:"테스트3", 
         subTitle:"서브타이틀 테스트3", 
         isBigAndMini:false, 
         imgUrl:'https://www.inflearn.com/wp-content/uploads/functional-programming.png',
         subImgUrl:'https://www.inflearn.com/wp-content/uploads/nodeapi.png'
        },
        {id:4, 
         title:"테스트4", 
         subTitle:"서브타이틀 테스트4", 
         isBigAndMini:false, 
         imgUrl:'https://www.inflearn.com/wp-content/uploads/es6-1.png',
         subImgUrl:'https://www.inflearn.com/wp-content/uploads/r-data2.jpg'
        }
    ]
}
const BigAndMini = () => {
    return(
    <SectionWithTitle title="빅엔미니 적용">
        <div className={cx('fg0')}>
        {state.img.map(img =>     
            (img.isBigAndMini?
                <HoverCard className={img.isBigAndMini}
                style={{backgroundImage:`url(${img.imgUrl})`}}
                >
                <div className={cx('layer')}>
                    <div className={cx('BigTitle')}>{img.title}</div>
                </div>  
                </HoverCard>
                :
                <div className={cx('fg1')}>
                <HoverCard className={img.isBigAndMini}
                style={{backgroundImage:`url(${img.imgUrl})`}}
                >
                <div className={cx('layer')}>
                    <div className={cx('MiniTitle')}>{img.title}</div>
                </div>  
                </HoverCard>
                <HoverCard className={img.isBigAndMini}
                style={{backgroundImage:`url(${img.subImgUrl})`}}
                >
                <div className={cx('layer')}>
                    <div className={cx('MiniTitle')}>{img.title}</div>
                </div>  
                </HoverCard>
                </div>
        ))}
        </div>
    </SectionWithTitle>
    );
}

export default BigAndMini;