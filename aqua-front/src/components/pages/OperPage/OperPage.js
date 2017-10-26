import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const OperPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            실무강의세요.
          </h1>
          <h2>
            블라블라 진행됩니다.
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default OperPage;