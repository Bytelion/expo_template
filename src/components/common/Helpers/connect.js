import React from 'react';
import { connect } from 'react-redux';
import actions from '@store/actions';
import actionTypes from '@store/actions/types';
import * as services from '@services';
import store from '@store';

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
