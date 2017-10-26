import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const StarPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            여기는 스타페이지.
          </h1>
          <h2>
            블라블라
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default StarPage;