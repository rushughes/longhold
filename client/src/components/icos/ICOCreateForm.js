import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ICOField from './ICOField';
import formFields from './formFields';
import { createICO } from '../../actions';

class ICOCreateForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ICOField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  onSubmit = (values) => {
    console.log('values', values);
    this.props.createICO(values, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFields()}
          <Link to="/icos" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Save<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default connect(null, { createICO })(reduxForm({
  validate,
  form: 'icoCreateForm',
  destroyOnUnmount: false,
})(withRouter(ICOCreateForm)));
