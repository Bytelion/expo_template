import React from 'react';
import { connect } from 'react-redux';
import store from '@store';
import actions from '@store/actions';
import actionTypes from '@store/actions/types';
import * as services from '@services';

export default mapStateToProps => WrappedComponent => {
  const ConnectedWrappedComponent = connect(
    mapStateToProps,
    actions
  )(WrappedComponent);

  return props => (
    <ConnectedWrappedComponent
      store={store}
      services={services}
      actionTypes={actionTypes}
      {...props}
    />
  );
};
