import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { socketListener } from './Socket';
import Main from './Main';
import MainController from './Controllers/MainController';

class RoutesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.changeRedirectPath = this.changeRedirectPath.bind(this);
  }

  componentDidMount() {
    socketListener().then(this.changeRedirectPath);
  }

  changeRedirectPath(path) {
    const { router } = this.context;
    router.history.push(path);
  }

  render() {
    return (
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/full' component={FullGame} />
          <Route path='/game/:shipId/:role' component={MainController} />
        </Switch>
    );
  }
}

RoutesContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};


export default RoutesContainer;
