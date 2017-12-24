import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ICOCreateForm from './ICOCreateForm';

class ICOCreate extends Component {

  renderContent() {
    return (
      <ICOCreateForm />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'icoCreateForm' })(ICOCreate);
