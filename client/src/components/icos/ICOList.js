import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchICOs } from '../../actions';

class ICOList extends Component {
  componentDidMount() {
    this.props.fetchICOs();
  }

  renderICOs() {
    console.log(this.props);
    return this.props.icos.reverse().map(ico => {
      return (
        <div className="card darken-1" key={ico._id}>
          <div className="card-content">
            <span className="card-title">{ico.project}</span>
            <p>{ico.symbol}</p>
            <p className="right">
              Investment {ico.investment}
            </p>
          </div>
          <div className="card-action">
            <a>{ico.transactionID}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderICOs()}</div>;
  }
}

function mapStateToProps({ icos }) {
  return { icos };
}

export default connect(mapStateToProps, { fetchICOs })(ICOList);
