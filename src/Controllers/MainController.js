import React from 'react';

import AimController from './AimController';
import PowerController from './PowerController';

const MainController = ({ match }) => {
  if(match.params.role === 'power') {
    return <PowerController />;
  }
  return <AimController />;
};

export default MainController;