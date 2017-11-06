import React from 'react';
import {
    LandingTemplate, 
    Section1Box, 
    OwlCarousel, 
    SectionBox,
    BigAndMini2
} from 'components';
import {HeaderContainer, FooterContainer} from 'containers';

const LezhinPage = () => {
    return (
        <LandingTemplate 
                header={<HeaderContainer />} footer={<FooterContainer />}>  
        <Section1Box>
            <OwlCarousel />
        </Section1Box>
        <SectionBox>
            <h1>렉트 카드</h1> 
        </SectionBox>
        <SectionBox>
            <BigAndMini2 />
        </SectionBox>
        <SectionBox>
            <h1>핫 히어로카드</h1>
        </SectionBox>
        </LandingTemplate>
    );
};

export default LezhinPage;