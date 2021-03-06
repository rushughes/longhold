import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchICOs } from '../../actions';
import { Link } from 'react-router-dom';

class ICOList extends Component {
  componentDidMount() {
    this.props.fetchICOs();
  }

  renderICOs() {
    console.log('ass', this.props.icos);
    return this.props.icos.reverse().map(ico => {
      return (
        <div className="card darken-1" key={ico._id}>
          <div className="card-content">
            <Link to={`/icos/edit/${ico._id}`}>
              <span className="card-title">{ico.project}</span>
            </Link>
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
