// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const ICOFormReview = ({ onCancel, formValues, submitICO, history }) => {
  console.log(submitICO);
  console.log(actions);

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitICO(formValues, history)}
      >
        Save Investment<i className="material-icons right">attach_money</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.icoForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ICOFormReview));
