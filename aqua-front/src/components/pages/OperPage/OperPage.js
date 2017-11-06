import React from 'react';
import { PageTemplate, PolyBackground, SectionBox,
  BigAndMini } from 'components';
import {HeaderContainer} from 'containers';

const OperPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <SectionBox>
            <BigAndMini />
        </SectionBox>
      </PolyBackground>
    </PageTemplate>
  );
};

export default OperPage;