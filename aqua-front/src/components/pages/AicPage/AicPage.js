import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const AicPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            AI코스입니다..
          </h1>
          <h2>
            블라블라.
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default AicPage;