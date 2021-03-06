// SurveyForm shows a form for a user to add input

import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ICOField from './ICOField';
import formFields from './formFields';

class ICOForm extends Component {
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

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onICOSubmit)}>
          {this.renderFields()}
          <Link to="/icos" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Save
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
/*
function componentWillMount() {
  if (this.props.pristine) {
    this.props.initializeForm(this.props.icos);
  }
}

function componentWillUnmount() {
  if (this.props.pristine) {
    this.props.destroyForm();
  }
}
*/

function mapStateToProps(state) {
  console.log('state:', state);
  return {
    initialValues: state.icos,
  };
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

export default connect(mapStateToProps)(reduxForm({
  validate,
  form: 'icoForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ICOForm));
