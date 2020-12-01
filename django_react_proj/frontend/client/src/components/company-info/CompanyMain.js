import React from 'react';
import CompanyList from './CompanyList';
import {Link} from '@reach/router';

const CompanyMain = (props) => {

    return (
        <div>
            <h1>Your Company Page</h1>
            <CompanyList />
            <Link to="/dept">View your department/boards.</Link>
        </div>
    )
}

export default CompanyMain;