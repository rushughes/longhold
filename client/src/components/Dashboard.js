import React from 'react';
import { Link } from 'react-router-dom';
import ICOList from './icos/ICOList';

const Dashboard = () => {
  return (
    <div>
      <ICOList />
      <div className="fixed-action-btn">
        <Link to="/icos/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
