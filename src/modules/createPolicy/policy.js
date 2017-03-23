import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPolicy } from './policyAction';
import UserForm from '../../components/userForm';

class Policy extends Component {
  componentWillMount() {
    this.props.createPolicy();
  }

  render() {
    return (
      <div>
        <UserForm/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    policy: state.newPolicy
  };
}

export default connect(mapStateToProps, { createPolicy })(Policy);
