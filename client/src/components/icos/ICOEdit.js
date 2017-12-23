// ICONew shows ICOForm and ICOFormReview
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ICOForm from './ICOForm';
import { fetchICO } from '../../actions';

class ICOEdit extends Component {
  state = { showFormReview: false };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.fetchICO(params.icoId);
  }

  renderContent() {
    return (
      <ICOForm
        ico={this.props.ico}
        onICOSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ ico }) {
  return { ico };
}

export default connect(mapStateToProps, { fetchICO })(ICOEdit);
