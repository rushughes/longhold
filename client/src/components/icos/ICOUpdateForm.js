import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ICOField from './ICOField';
import formFields from './formFields';
import { updateICO } from '../../actions';

class ICOUpdateForm extends Component {
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
    this.props.updateICO(values, this.props.history);
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
            Update<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, { updateICO })(reduxForm({
  validate,
  form: 'icoUpdateForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(withRouter(ICOUpdateForm)));
