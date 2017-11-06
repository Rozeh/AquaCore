import React from 'react';
import { PageTemplate, PolyBackground, OwlCarousel, Section1Box } from 'components';
import {HeaderContainer} from 'containers';

const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer />}>
      <PolyBackground>
          <Section1Box>
            <OwlCarousel />
          </Section1Box>
      </PolyBackground>
    </PageTemplate>
  );
};

export default HomePage;