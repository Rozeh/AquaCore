import React from 'react';
import {
    LandingTemplate, 
    Section1Box, 
    OwlCarousel, 
    SectionBox,
    BigAndMini
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
            <h1>빅앤미니</h1>
        </SectionBox>
        <SectionBox>
            <BigAndMini />
        </SectionBox>
        </LandingTemplate>
    );
};

export default LezhinPage;