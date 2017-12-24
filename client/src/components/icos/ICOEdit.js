// ICONew shows ICOForm and ICOFormReview
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { reduxForm } from 'redux-form';
import ICOUpdateForm from './ICOUpdateForm';
import { fetchICO } from '../../actions';

class ICOEdit extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.fetchICO(params.icoId);
  }

  renderContent() {
    return (
      <ICOUpdateForm
        icos={this.props.icos}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ icos }) {
  return { icos };
}

export default connect(mapStateToProps, { fetchICO })(ICOEdit);
