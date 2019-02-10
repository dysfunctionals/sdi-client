import React from 'react';

import AimController from './AimController';
import PowerController from './PowerController';

const MainController = ({ match }) => {
  if(match.params.role === 'power') {
    return <PowerController match={match} />;
  }
  return <AimController match={match} />;
};

export default MainController;