// ICONew shows ICOForm and ICOFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ICOForm from './ICOForm';
import ICOFormReview from './ICOFormReview';

class ICONew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <ICOFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    } else {
      return (
        <ICOForm
          onICOSubmit={() => this.setState({ showFormReview: true })}
        />
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'icoForm' })(ICONew);
